import { useState } from 'react'
import './App.css'
import Componente from './Componente'
import { NamedComponent } from './NamedComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hola</h1>
      <Componente />
      <NamedComponent />
    </>
  )
}

export default App
