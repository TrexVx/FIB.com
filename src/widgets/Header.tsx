import { useState } from 'react';
import './Header.css';
import logoIcon from '../assets/images/logos/fib_icon.png';

interface HeaderProps {
  actualTab: string;
  onTabChange: (tabName: string) => void;
}

function Header({ actualTab, onTabChange }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (tabName: string) => {
    onTabChange(tabName);
    setIsOpen(false);
  };

  return (
    <header className="Header">
      <div className="header-logo-container" onClick={() => handleNavClick('inicio')} style={{ cursor: 'pointer' }}>
        <img src={logoIcon} alt="FIB Logo" className="header-mini-logo" />
        <h1>FIB</h1>
      </div>

      {/* Botón del Menú de Hamburguesa */}
      <button 
        className={`hamburger-btn ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Abrir menú de navegación"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <button 
              className={`nav-link ${actualTab === 'inicio' ? 'active' : ''}`}
              onClick={() => handleNavClick('inicio')}
            >
              Inicio
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${actualTab === 'comunicados' ? 'active' : ''}`}
              onClick={() => handleNavClick('comunicados')}
            >
              Comunicados
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${actualTab === 'divisiones' ? 'active' : ''}`}
              onClick={() => handleNavClick('divisiones')}
            >
              Divisiones
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${actualTab === 'normativa' ? 'active' : ''}`}
              onClick={() => handleNavClick('normativa')}
            >
              Normativa
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${actualTab === 'transparencia' ? 'active' : ''}`}
              onClick={() => handleNavClick('transparencia')}
            >
              Transparencia
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;