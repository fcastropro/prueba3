// src/App.tsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App: React.FC = () => {
  const [section, setSection] = useState('home');

  return (
    <div>
      <Navbar onNavigate={setSection} />
      {section === 'home' && <Home />}
      {/* Aquí irán las demás secciones: Users, Salary, Bonus, Register */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>© 2025 - Mi App de Prueba - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
