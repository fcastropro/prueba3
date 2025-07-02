import React, { useState } from 'react';

const RegistroUsuario: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('Developer');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMensaje(`Registrado: ${nombre}, edad ${edad}, cargo ${cargo}.`);
    alert(`Usuario registrado exitosamente: ${nombre}`);
    setNombre('');
    setEdad('');
    setCargo('Developer');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-white p-4 shadow rounded">
          <h3 className="text-center mb-4">Registro de Usuario</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre:</label>
              <input
                type="text"
                className="form-control"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Edad:</label>
              <input
                type="number"
                className="form-control"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Cargo:</label>
              <select
                className="form-select"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
              >
                <option>Developer</option>
                <option>Designer</option>
                <option>Tester</option>
              </select>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-success">
                Registrar
              </button>
            </div>
          </form>

          {mensaje && <div className="alert alert-info mt-3">{mensaje}</div>}
        </div>
      </div>
    </div>
  );
};

export default RegistroUsuario;
