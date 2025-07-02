import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Usuarios from './pages/Usuarios';
import Sueldo from './pages/Sueldo';
import Bono from './pages/Bono';
import Registro from './pages/Registro';

const App: React.FC = () => {
  const [section, setSection] = useState('home');

  return (
    <div>
      <Navbar onNavigate={setSection} />
      {section === 'home' && <Home />}
      {section === 'users' && <Usuarios />}
      {section === 'salary' && <Sueldo />}
      {section === 'bono' && <Bono />}
      {section === 'registro' && <Registro />}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>© 2025 - Mi App de Prueba - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
