import "./App.css";

function App() {
  return (
    <div className="app">
      <main className="main">
        <section className="hero">
          <p className="badge">Arquitectura de Sistemas II</p>
          <h1>Despliegue en AWS Beanstalk</h1>
          <p className="subtitle">
            Aplicación estática creada con React + Vite, dockerizada y lista para
            despliegue con GitHub Actions.
          </p>
        </section>

        <section className="cards">
          <article className="card">
            <h2>⚡ Vite</h2>
            <p>Proyecto configurado para desarrollo y build.</p>
          </article>

          <article className="card">
            <h2>🔐 Doppler</h2>
            <p>Gestión segura de credenciales para despliegue.</p>
          </article>

          <article className="card">
            <h2>🐳 Docker</h2>
            <p>Contenedor para ejecutar y desplegar la aplicación.</p>
          </article>

          <article className="card">
            <h2>✅ Husky</h2>
            <p>Validaciones previas a commit con hooks.</p>
          </article>

          <article className="card">
            <h2>⚙️ Pipeline</h2>
            <p>Build de imagen Docker y despliegue automático.</p>
          </article>

          <article className="card">
            <h2>☁️ Beanstalk</h2>
            <p>Publicación de la app en AWS Elastic Beanstalk.</p>
          </article>
        </section>
      </main>

      <footer className="footer">
        <p>Hecho por Alexander Méndez • 2026</p>
      </footer>
    </div>
  );
}

export default App;