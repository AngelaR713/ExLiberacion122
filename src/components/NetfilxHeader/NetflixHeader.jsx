import React from 'react';
import './NetflixHeader.css';
import netflixLogo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const NetflixHeader = () => {
  return (
    <header className="netflix-header">
      <Link to="/">
        <img src={netflixLogo} alt="Netflix Logo" className="logo" width={100} />
      </Link>

      <div className="header-center">
        <button className='button_g'>
          <Link to="/mas-recientes">Mas Recientes</Link>
        </button>
        <button>
          <Link to="/colecciones">Colecciones</Link>
        </button>
      </div>

      <div className="header-right">
        <button>
          <Link to="/login">Iniciar Sesión</Link>
        </button>
        <input
          type="text"
          placeholder="Buscar..."
          className="search-input"
        />
      </div>
    </header>
  );
};

export default NetflixHeader;
