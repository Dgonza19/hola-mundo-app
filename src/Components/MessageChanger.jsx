import React, { useState } from 'react';

function MessageChanger({ mensajeInicial }) {

    const [mensaje, setMensaje] = useState(mensajeInicial);

    const cambiarMensaje = () => {
        setMensaje((prevMensaje) => 
            prevMensaje === mensajeInicial ? 'El mensaje ha cambiado!' : mensajeInicial);
    };

    return(
        <div>
            <p>{mensaje}</p>
            <button onClick={cambiarMensaje}>Cambiar Mensaje</button>
        </div>
    )
}
export default MessageChanger;