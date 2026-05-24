import { createContext, useContext, useState } from 'react';
import './Header.css'


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="Header">
      <h1>Federal Investigation Bureau</h1>
      <nav>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? 'Cerrar' : 'Abrir'} Menú
        </button>
        {isMenuOpen && (
          <ul className="nav-menu">
                <li className="nav-item">
                    <a href="#" className="nav-link">Services</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Blog</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Contact</a>
                </li>
            </ul>
            
        )}
        <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
      </nav>
    </header>
  );
};

export default Header;
