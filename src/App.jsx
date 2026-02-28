import "./App.css";

function App() {
  return (
    <div className="app">
      <main className="main">
        <section className="hero">
          <p className="badge">Arquitectura de Sistemas II</p>

          <h1>Assignment 04 - Pipeline a Docker Hub</h1>

          <p className="subtitle">
            Aplicación creada con React + Vite, dockerizada y lista para un
            pipeline de GitHub Actions con publicación automática en Docker Hub.
          </p>

          <div className="status-box">
            <p className="status-title">Entrega actual</p>
            <p className="status-text">
              Construir la imagen en cada push, publicar los tags{" "}
              <strong>latest</strong> y <strong>SHA del commit</strong>, y
              gestionar credenciales con <strong>Doppler</strong>.
            </p>
          </div>
        </section>

        <section className="cards">
          <article className="card">
            <h2>Proyecto en Vite</h2>
            <p>Configurado con React para desarrollo y build de producción.</p>
          </article>

          <article className="card">
            <h2>Secretos con Doppler</h2>
            <p>Credenciales seguras y sincronizadas con GitHub.</p>
          </article>

          <article className="card">
            <h2>App Dockerizada</h2>
            <p>La aplicación está empaquetada y lista para correr en un contenedor.</p>
          </article>

          <article className="card">
            <h2>GitHub Actions</h2>
            <p>Workflow automático que construye y sube la imagen a Docker Hub.</p>
          </article>

          <article className="card">
            <h2>Tags en Docker Hub</h2>
            <p>
              Cada push genera <strong>latest</strong> y otro tag basado en el{" "}
              <strong>SHA del commit</strong>.
            </p>
          </article>

          <article className="card">
            <h2>Commits incrementales</h2>
            <p>Varios commits generan varias imágenes como evidencia de avance.</p>
          </article>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>Hecho por Alexander Méndez • Assignment 04 • 2026</p>
        </div>
      </footer>
    </div>
  );
}

export default App;