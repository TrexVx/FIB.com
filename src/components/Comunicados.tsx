import { useState } from 'react';
import './styles.css';

interface Comunicado {
  id: number;
  idOficial: string;
  categoria: 'SEGURIDAD' | 'OPERATIVOS' | 'INSTITUCIONAL';
  titulo: string;
  fecha: string;
  extracto: string;
  contenidoCompleto: string;
  autor: string;
}

const listaComunicados: Comunicado[] = [
  {
    id: 1,
    idOficial: "FIB-2026-0042",
    categoria: 'SEGURIDAD',
    titulo: 'Actualización en los protocolos de ciberseguridad nacional',
    fecha: '24 de Mayo, 2026',
    extracto: 'La división de delitos tecnológicos ha desplegado una nueva infraestructura cifrada para mitigar vulnerabilidades.',
    contenidoCompleto: 'Por orden de la dirección general, se ha implementado un nuevo cifrado de extremo a extremo en todas las terminales móviles y bases de datos integradas del FIB y departamentos asociados. Todos los agentes deberán actualizar sus credenciales de acceso antes del fin del ciclo operativo actual.',
    autor: 'División de Tecnología e Inteligencia'
  },
  {
    id: 2,
    idOficial: "FIB-2026-0039",
    categoria: 'OPERATIVOS',
    titulo: 'Resultados del despliegue táctico en el sector metropolitano',
    fecha: '18 de Mayo, 2026',
    extracto: 'En coordinación con las fuerzas locales, el FIB comparte el balance oficial de las operaciones de pacificación.',
    contenidoCompleto: 'Tras una investigación de tres meses, las unidades especiales (HRT) ejecutaron múltiples órdenes de registro simultáneas en la zona norte, resultando en la desarticulación de una red clave de contrabando. Se incautaron materiales de alta peligrosidad y equipos de comunicación ilegal.',
    autor: 'Mando de Operaciones Especiales'
  },
  {
    id: 3,
    idOficial: "FIB-2026-0035",
    categoria: 'INSTITUCIONAL',
    titulo: 'Apertura de la convocatoria anual para la Academia del FIB',
    fecha: '05 de Mayo, 2026',
    extracto: 'Se publican los requisitos oficiales y las fechas de evaluación para los aspirantes al cuerpo de investigación.',
    contenidoCompleto: 'El departamento de Recursos Humanos abre oficialmente el proceso de selección para nuevos analistas y agentes de campo. Los exámenes psicotécnicos, médicos y de balística se llevarán a cabo en las instalaciones centrales durante el próximo mes.',
    autor: 'Dirección de Asuntos Administrativos'
  }
];

function Comunicados() {
  const [filtro, setFiltro] = useState<string>('TODOS');
  const [comunicadoSeleccionado, setComunicadoSeleccionado] = useState<Comunicado | null>(null);

  const comunicadosFiltrados = filtro === 'TODOS' 
    ? listaComunicados 
    : listaComunicados.filter(c => c.categoria === filtro);

  return (
    <div className="comunicados-page">
      <div className="comunicados-header">
        <h2>CENTRO DE COMUNICADOS OFICIALES</h2>
        <p>Historial y registro público de boletines, alertas y resoluciones del FIB.</p>
      </div>

      {/* Barra de Filtros */}
      <div className="filter-bar">
        {['TODOS', 'SEGURIDAD', 'OPERATIVOS', 'INSTITUCIONAL'].map((cat) => (
          <button 
            key={cat} 
            className={`filter-btn ${filtro === cat ? 'active' : ''}`}
            onClick={() => setFiltro(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Contenedor Principal con Dos Columnas si hay uno seleccionado */}
      <div className="comunicados-layout">
        
        {/* Lista de Tarjetas */}
        <div className={`comunicados-list ${comunicadoSeleccionado ? 'split-view' : ''}`}>
          {comunicadosFiltrados.map((comunicado) => (
            <div 
              key={comunicado.id} 
              className={`comunicado-card ${comunicadoSeleccionado?.id === comunicado.id ? 'selected' : ''}`}
              onClick={() => setComunicadoSeleccionado(comunicado)}
            >
              <div className="card-top">
                <span className={`badge ${comunicado.categoria.toLowerCase()}`}>
                  {comunicado.categoria}
                </span>
                <span className="doc-id">{comunicado.idOficial}</span>
              </div>
              <h3>{comunicado.titulo}</h3>
              <p className="date">{comunicado.fecha}</p>
              <p className="excerpt">{comunicado.extracto}</p>
              <span className="action-text">Haga clic para expandir informe completo →</span>
            </div>
          ))}
        </div>

        {/* Panel de Vista Detallada (Aparece a la derecha si se selecciona uno) */}
        {comunicadoSeleccionado && (
          <aside className="comunicado-detail-panel">
            <button className="close-panel-btn" onClick={() => setComunicadoSeleccionado(null)}>
              ✕ Cerrar Vista
            </button>
            <div className="detail-header">
              <span className="detail-id">{comunicadoSeleccionado.idOficial}</span>
              <h2>{comunicadoSeleccionado.titulo}</h2>
              <div className="detail-meta">
                <p><strong>Fecha de Emisión:</strong> {comunicadoSeleccionado.fecha}</p>
                <p><strong>Origen:</strong> {comunicadoSeleccionado.autor}</p>
              </div>
            </div>
            <div className="detail-body">
              <p>{comunicadoSeleccionado.contenidoCompleto}</p>
            </div>
            <div className="detail-footer">
              <p className="legal-notice">DOCUMENTO AUTORIZADO PARA DIFUSIÓN PÚBLICA // CONTEXTO DE TRANSPARENCIA</p>
            </div>
          </aside>
        )}

      </div>
    </div>
  );
}

export default Comunicados;