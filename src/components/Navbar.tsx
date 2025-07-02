// src/components/Navbar.tsx
import React from 'react';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Mi App Bootstrap</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><a className="nav-link" href="/" onClick={() => onNavigate('home')}>Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#" onClick={() => onNavigate('users')}>Usuarios</a></li>
          <li className="nav-item"><a className="nav-link" href="#" onClick={() => onNavigate('salary')}>Sueldo</a></li>
          <li className="nav-item"><a className="nav-link" href="#" onClick={() => onNavigate('bonus')}>Bono</a></li>
          <li className="nav-item"><a className="nav-link" href="#" onClick={() => onNavigate('register')}>Registro</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;