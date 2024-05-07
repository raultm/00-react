import { useState } from 'react'
import { CharactersList } from './components/CharactersList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='flex flex-col items-center'>
        <CharactersList />
      </main>
    </>
  )
}

export default App