import React, { useState } from 'react';

const BuscarBusPorId = () => {
  const [id, setId] = useState(''); 
  const [bus, setBus] = useState(null); 

 
  const buscarBus = async (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario

    try {
      const respuesta = await fetch(`http://localhost:8080/api-buses/buscar/${id}`);
      if (!respuesta.ok) {
        throw new Error('Bus no encontrado');
      }
      const datos = await respuesta.json();
      setBus(datos); 
    } catch (err) {
      console.log(err)
     
    }
  };

  return (
    <div style={{ marginLeft: '30%' }}>
      <h2>      Buscar Bus por ID</h2>
      
      
      <form onSubmit={buscarBus}>
        <input
          type="text"
          placeholder="Ingrese ID del Bus"
          value={id}
          onChange={(e) => setId(e.target.value)} 
          
        />
        <button type="submit">Buscar</button>
      </form>

      
      {bus && (
        <div>
          <h3>Detalles del Bus</h3>
          <p><strong>ID:</strong> {bus.id}</p>
          <p><strong>Placa:</strong> {bus.placa}</p>
          <p><strong>Marca:</strong> {bus.marca.nombre}</p>
          <p><strong>Características:</strong> {bus.caracteristicas}</p>
          <p><strong>Fecha de Creación:</strong> {new Date(bus.fechaCreacion).toISOString().split('T')[0]}</p>
        </div>
      )}
    </div>
  );
};

export default BuscarBusPorId;
