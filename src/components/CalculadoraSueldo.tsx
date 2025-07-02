import React, { useState } from 'react';

const CalculadoraSueldo: React.FC = () => {
  const [sueldoBasico, setSueldoBasico] = useState<number>(0);
  const [primas, setPrimas] = useState<number>(0);
  const [deducciones, setDeducciones] = useState<number>(0);
  const [sueldoNeto, setSueldoNeto] = useState<number | null>(null);

  const calcularSueldoNeto = () => {
    const neto = sueldoBasico + primas - deducciones;
    setSueldoNeto(neto);
  };

  return (
    <div className="container mt-4">
      <h3>Calculadora de Sueldo Neto</h3>

      <div className="form-group">
        <label>Sueldo Básico:</label>
        <input
          type="number"
          className="form-control"
          value={sueldoBasico}
          onChange={(e) => setSueldoBasico(parseFloat(e.target.value))}
        />
      </div>

      <div className="form-group">
        <label>Primas:</label>
        <input
          type="number"
          className="form-control"
          value={primas}
          onChange={(e) => setPrimas(parseFloat(e.target.value))}
        />
      </div>

      <div className="form-group">
        <label>Deducciones:</label>
        <input
          type="number"
          className="form-control"
          value={deducciones}
          onChange={(e) => setDeducciones(parseFloat(e.target.value))}
        />
      </div>

      <button className="btn btn-success mt-2" onClick={calcularSueldoNeto}>
        Calcular
      </button>

      {sueldoNeto !== null && (
        <p className="mt-3"><strong>Sueldo Neto:</strong> {sueldoNeto}</p>
      )}
    </div>
  );
};

export default CalculadoraSueldo;
