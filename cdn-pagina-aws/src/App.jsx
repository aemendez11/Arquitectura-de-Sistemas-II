import { useState } from "react";
import "./App.css";

function App() {
  const [showCloudFront, setShowCloudFront] = useState(false);
  const [showS3, setShowS3] = useState(false);

  return (
    <div className="page">
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />

      <main className="container">
        <section className="hero glass">
          <h1 className="title">Bienvenido a mi página web </h1>

          <p className="subtitle">
            Este sitio es una app estática hecha con <b>Vite + React</b> y desplegada en{" "}
            <b>AWS</b> usando <b>S3</b> + <b>CloudFront (CDN)</b>.
          </p>

          <div className="actions">
            <button
              className="btn primary"
              onClick={() => setShowCloudFront((v) => !v)}
            >
              {showCloudFront ? "Ocultar info de CloudFront" : "¿Qué es CloudFront?"}
            </button>

            <button className="btn ghost" onClick={() => setShowS3((v) => !v)}>
              {showS3 ? "Ocultar info de S3" : "¿Qué es S3?"}
            </button>
          </div>

          {showCloudFront && (
            <div className="note" style={{ marginTop: 14 }}>
              <span className="note__badge">CloudFront</span>
              <span className="note__text">
                Es un <b>CDN</b> (Red de Distribución de Contenido). Acelera tu sitio al
                guardar copias (caché) en servidores distribuidos y servirlas desde el
                punto más cercano al usuario, reduciendo la latencia.
              </span>
            </div>
          )}

          {showS3 && (
            <div className="note" style={{ marginTop: 10 }}>
              <span className="note__badge">S3</span>
              <span className="note__text">
                Es almacenamiento en la nube. En este proyecto se usa para guardar los
                archivos del build (carpeta <b>dist/</b>) y publicarlos como sitio estático.
              </span>
            </div>
          )}

          <div className="note" style={{ marginTop: 16 }}>
            <span className="note__badge">Nota</span>
            <span className="note__text">
              Si actualizas el contenido y no ves cambios, es normal: CloudFront puede
              seguir mostrando caché. Por eso normalmente se hace una <b>invalidación</b>.
            </span>
          </div>
        </section>

        <footer className="footer glass">
          <span>Alexander Méndez • Arquitectura de Sistemas II</span>
          <span className="sep">•</span>
          <span className="muted">Sitio estático en AWS CDN</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
