import React, { useState } from 'react';

const BonoVacacionalForm: React.FC = () => {
  const [sueldoDiario, setSueldoDiario] = useState<number>(0);
  const [dias, setDias] = useState<number>(5);
  const [bono, setBono] = useState<number | null>(null);

  const calcularBono = () => {
    setBono(sueldoDiario * dias);
  };

  return (
    <div className="container mt-4">
      <h3>Cálculo de Bono Vacacional</h3>

      <div className="form-group">
        <label>Suelo Diario:</label>
        <input
          type="number"
          className="form-control"
          value={sueldoDiario}
          onChange={(e) => setSueldoDiario(parseFloat(e.target.value))}
        />
      </div>

      <div className="form-group">
        <label>Días de disfrute:</label>
        <select
          className="form-control"
          value={dias}
          onChange={(e) => setDias(parseInt(e.target.value))}
        >
          <option value={5}>5 días</option>
          <option value={10}>10 días</option>
          <option value={15}>15 días</option>
        </select>
      </div>

      <button className="btn btn-success mt-2" onClick={calcularBono}>
        Calcular Bono
      </button>

      {bono !== null && (
        <div className="mt-3">
          <strong>Bono Vacacional:</strong> {bono}
        </div>
      )}
    </div>
  );
};

export default BonoVacacionalForm;
