import { useState } from 'react'
import './App.css'
import { Character } from './components/Character'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Character/>
    </>
  )
}

export default App
