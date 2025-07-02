import React from 'react';

interface Props {
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<Props> = ({ onNavigate }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Mi App Bootstrap</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => onNavigate('users')} style={{ cursor: 'pointer' }}>Usuarios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => onNavigate('salary')} style={{ cursor: 'pointer' }}>Sueldo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => onNavigate('bono')} style={{ cursor: 'pointer' }}>Bono</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => onNavigate('registro')} style={{ cursor: 'pointer' }}>Registro</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
