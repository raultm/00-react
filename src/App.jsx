import { useState } from 'react'
import './App.css'
import Componente from './Componente'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hola</h1>
      <Componente></Componente>
    </>
  )
}

export default App
