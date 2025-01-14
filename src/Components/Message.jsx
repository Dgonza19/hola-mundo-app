import React from 'react';

function Message({datos}) {
    const nombre = 'Camila';
    const color = 'darkorange';
    const titulo = 'Programadora'
    const edad = '29'

    const estilo = {
        color: color,
        fontSize: '16px'
    }
    
    return (
        <div>
            <h2>Mi Perfil</h2>
            <p>Nombre: {nombre}</p>
            <p style={estilo}>Edad: {edad}</p>
            <p>Titulo: {titulo}</p>

            <h4>Estudiantes</h4>
            <ul>
                {datos.nombres.map(nombres => (
                    <li key={nombres}>{nombres}</li>
                ))}
            </ul>
        </div>
    )
}
export default Message;