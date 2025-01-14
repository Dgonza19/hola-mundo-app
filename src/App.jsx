import React from 'react'
import Message from './Components/Message'
import MessageChanger from './Components/MessageChanger'

function App() {
  const datos = {
    nombres: ['Ana', 'Luis', 'Marta', 'Carlos']
  }

  return (
    <div>
      <Message datos={datos} />
      <MessageChanger mensajeInicial={'Hola, haz clic para cambiar este mensaje'} />
    </div>
  )
}

export default App
