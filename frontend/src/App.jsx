import { useState, useEffect, useRef } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from './api';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [adding, setAdding] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => { loadTasks(); }, []);

  async function loadTasks() {
    try {
      setLoading(true);
      const data = await getTasks();
      setTasks(data);
    } catch {
      setError('Could not connect to the server.');
    } finally {
      setLoading(false);
    }
  }

  async function handleAdd(e) {
    e.preventDefault();
    if (!input.trim() || adding) return;
    try {
      setAdding(true);
      const task = await createTask(input.trim());
      setTasks(prev => [task, ...prev]);
      setInput('');
      inputRef.current?.focus();
    } catch {
      setError('Failed to add task.');
    } finally {
      setAdding(false);
    }
  }

  async function handleToggle(task) {
    const updated = { ...task, completed: !task.completed };
    setTasks(prev => prev.map(t => t.id === task.id ? updated : t));
    try {
      await updateTask(task.id, { completed: !task.completed });
    } catch {
      setTasks(prev => prev.map(t => t.id === task.id ? task : t));
    }
  }

  async function handleDelete(id) {
    setTasks(prev => prev.filter(t => t.id !== id));
    try {
      await deleteTask(id);
    } catch {
      loadTasks();
    }
  }

  const pending = tasks.filter(t => !t.completed);
  const done = tasks.filter(t => t.completed);

  return (
    <div className="layout">
      <header className="header">
        <div className="header-inner">
          <span className="logo">✦</span>
          <h1 className="title">Checklist</h1>
          <span className="counter">{pending.length} pending</span>
        </div>
      </header>

      <main className="main">
        <form className="form" onSubmit={handleAdd}>
          <input
            ref={inputRef}
            className="input"
            type="text"
            placeholder="Add a new task..."
            value={input}
            onChange={e => setInput(e.target.value)}
            disabled={adding}
            autoFocus
          />
          <button className="btn-add" type="submit" disabled={adding || !input.trim()}>
            {adding ? '…' : '+'}
          </button>
        </form>

        {error && (
          <div className="error-banner">
            {error}
            <button onClick={() => setError(null)}>×</button>
          </div>
        )}

        {loading ? (
          <div className="loading"><div className="spinner" /></div>
        ) : (
          <div className="task-list">
            {tasks.length === 0 && (
              <div className="empty"><p>No tasks yet. Add one above.</p></div>
            )}
            {pending.map(task => (
              <TaskItem key={task.id} task={task} onToggle={handleToggle} onDelete={handleDelete} />
            ))}
            {done.length > 0 && (
              <>
                <div className="section-divider">Completed ({done.length})</div>
                {done.map(task => (
                  <TaskItem key={task.id} task={task} onToggle={handleToggle} onDelete={handleDelete} />
                ))}
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className={`task-item ${task.completed ? 'done' : ''}`}>
      <button className={`checkbox ${task.completed ? 'checked' : ''}`} onClick={() => onToggle(task)}>
        {task.completed && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
      <span className="task-title">{task.title}</span>
      <button className="btn-delete" onClick={() => onDelete(task.id)}>×</button>
    </div>
  );
}