import React, { useState, useEffect } from 'react';

const TablaBuses = () => {
    const [buses, setBuses] = useState([]);
    const [pagina, setPagina] = useState(0);
    const tamanoPagina = 5;
    const [cantidadBuses, setCantidadBuses] = useState([]);

    useEffect(() => {
        const obtenerBuses = async () => {
            try {
                const respuesta = await fetch(`http://localhost:8080/api-buses/listar?page=${pagina}&size=${tamanoPagina}`);
                if (!respuesta.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const datos = await respuesta.json();
                setBuses(datos.content);
                setCantidadBuses(datos.totalElements);
                console.log(datos.totalElements);
            } catch (err) {
                console.log(err);
            } 
        };
        obtenerBuses();
    }, [pagina, tamanoPagina]);
    const manejarPaginaSiguiente = () => {
        
            setPagina(pagina + 1);
        
    };

    const manejarPaginaAnterior = () => {
        
            setPagina(pagina - 1);
        
    };

    return (
        <div>
            <h2>Lista de Buses</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>caracteristicas</th>
                        <th>placa</th>
                        <th>Modelo</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {buses.map(bus => (
                        <tr key={bus.id}>
                            <td>{bus.id}</td>
                            <td>{bus.caracteristicas}</td>
                            <td>{bus.placa}</td>
                            <td>{bus.marca.nombre}</td>
                            <td>{new Date(bus.fechaCreacion).toISOString().split('T')[0]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={manejarPaginaAnterior} disabled={pagina === 0}>Anterior</button>
            <button onClick={manejarPaginaSiguiente} disabled={ cantidadBuses<(pagina+1)*tamanoPagina}>Siguiente</button>
        </div>
    );
};


export default TablaBuses