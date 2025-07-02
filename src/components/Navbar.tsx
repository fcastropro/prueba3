import React from 'react';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <a className="navbar-brand" href="#" onClick={(e) => e.preventDefault()}>
        Mi App Bootstrap
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/usuarios" onClick={(e) => { e.preventDefault(); onNavigate('users'); }}>
              Usuarios
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('salary'); }}>
              Sueldo
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('bono'); }}>
              Bono
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); onNavigate('register'); }}>
              Registro
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
