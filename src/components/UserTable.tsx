import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Usuario {
  id: string;
  username: string;
  email: string;
}

interface ApiResponse {
  data: {
    items: Usuario[];
  };
}

const TableUsuarios: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [usuariosFiltrados, setUsuariosFiltrados] = useState<Usuario[]>([]);
  const [filtroEmail, setFiltroEmail] = useState('');

  const fetchUsuarios = async () => {
    try {
      const response = await axios.get<ApiResponse>(
        'https://nestjs-blob-backend.desarrollo-software.xyz/users?page=1&limit=100&isActive=true'
      );

      const datos = response.data.data.items.map((item: any) => ({
        id: item.id,
        username: item.username,
        email: item.email ?? '',
      }));

      setUsuarios(datos);
      setUsuariosFiltrados(datos);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const filtrarPorEmail = () => {
    const resultado = usuarios.filter((u) =>
      u.email.toLowerCase().includes(filtroEmail.toLowerCase())
    );
    setUsuariosFiltrados(resultado);
  };

  return (
    <div className="container mt-4">
      <h3>Listado de Usuarios</h3>

      <div className="form-group">
        <label>Filtrar por email:</label>
        <input
          type="text"
          className="form-control"
          value={filtroEmail}
          onChange={(e) => setFiltroEmail(e.target.value)}
        />
        <button className="btn btn-success mt-2" onClick={filtrarPorEmail}>
          Filtrar
        </button>
      </div>

      <table className="table table-bordered mt-3">
        <thead className="thead-light">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usuariosFiltrados.length === 0 ? (
            <tr>
              <td colSpan={3}>No hay usuarios encontrados.</td>
            </tr>
          ) : (
            usuariosFiltrados.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id.slice(0, 8)}</td>
                <td>{usuario.username}</td>
                <td>{usuario.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableUsuarios;
