import { useState } from 'react';
import Header from './widgets/Header';
import Footer from './widgets/Footer';
import Comunicados from './components/Comunicados';
import Divisiones from './components/Divisiones';
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState('inicio');

  return (
    <div className="portal-container">
      <Header actualTab={currentTab} onTabChange={setCurrentTab} />

      {currentTab === 'inicio' ? (
        <>
          <section className="hero-banner">
            <div className="banner-overlay"></div>
            <div className="banner-content">
              <h1 className='titulo'>FEDERAL INVESTIGATION BUREAu</h1>
              <p className="subtitle">Fidelidad • Bravura • Integridad</p>
              <p className='slogan'>Proteger al pueblo estadounidense por todos y cada uno de los medios necesarios. </p>
            </div>
          </section>

          <main className="portal-main">
            
            <section className="news-section">
              <h2 className="section-title">Comunicados Oficiales Recientes</h2>
              <div className="news-grid">
                
                <article className="news-card">
                  <div className="card-tag">SEGURIDAD</div>
                  <h3>Actualización en los protocolos de ciberseguridad nacional</h3>
                  <p className="news-date">Publicado el 24 de Mayo, 2026</p>
                  <p className="news-excerpt">
                    La división de delitos tecnológicos ha desplegado una nueva infraestructura cifrada para mitigar vulnerabilidades en los sistemas de comunicación interdepartamentales.
                  </p>
                  <button onClick={() => setCurrentTab('comunicados')} className="read-more-btn">
                    Leer artículo completo →
                  </button>
                </article>

                <article className="news-card">
                  <div className="card-tag">OPERATIVOS</div>
                  <h3>Resultados del despliegue táctico en el sector metropolitano</h3>
                  <p className="news-date">Publicado el 18 de Mayo, 2026</p>
                  <p className="news-excerpt">
                    En coordinación con las fuerzas locales, el FIB comparte el balance oficial de las operaciones de pacificación y desarticulación de células delictivas organizadas.
                  </p>
                  <button onClick={() => setCurrentTab('comunicados')} className="read-more-btn">
                    Leer artículo completo →
                  </button>
                </article>

              </div>
            </section>

            <section className="info-directory">
              <h2 className="section-title">Directorio e Información Institucional</h2>
              <div className="directory-grid">
                
                <div className="directory-box">
                  <h4>Nuestra Misión</h4>
                  <p>Proteger y defender a la nación contra amenazas terroristas y de inteligencia extranjera, velando por el cumplimiento estricto de las leyes constitucionales.</p>
                </div>

                <div className="directory-box">
                  <h4>Divisiones Especiales</h4>
                  <p>Conoce la estructura del FIB, incluyendo el equipo de Respuesta a Rehenes (HRT), el Equipo de Respuesta Temprana (ERT) y Asuntos Internos.</p>
                </div>

                <div className="directory-box">
                  <h4>Transparencia</h4>
                  <p>Acceso público a los boletines informativos oficiales, normativas internas del departamento y estatutos de conducta de nuestros agentes.</p>
                </div>

              </div>
            </section>

          </main>
        </>
      ) : currentTab === 'comunicados' ? (
        <Comunicados />
      ) :
      currentTab === 'divisiones' ? (
        <Divisiones />
      ) :
       (
        <main className="portal-main">
          <section className="info-directory">
            <h2 className="section-title" style={{ textTransform: 'uppercase' }}>{currentTab}</h2>
            <div className="directory-box">
              <p>Esta sección se encuentra actualmente en mantenimiento o bajo actualización de credenciales del FIB.</p>
            </div>
          </section>
        </main>
      )}

      <Footer />
    </div>
  );
}

export default App;