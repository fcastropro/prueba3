import React, { useState } from 'react';

const RegisterForm: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('Developer');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí puedes hacer la lógica de envío, por ejemplo, a una API
    console.log({ nombre, edad, cargo });

    // Limpieza del formulario
    setNombre('');
    setEdad('');
    setCargo('Developer');
    alert(`Usuario ${nombre} registrado exitosamente`);

  };

  return (
    <div className="container mt-5">
      <h3>Registro de Usuario</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="form-group mt-2">
          <label>Edad:</label>
          <input
            type="number"
            className="form-control"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            required
          />
        </div>

        <div className="form-group mt-2">
          <label>Cargo:</label>
          <select
            className="form-control"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          >
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Tester</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success mt-3">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
