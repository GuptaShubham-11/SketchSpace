import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-fuchsia-300 p-5 font-bold rounded'>Draw</h1>
    </>
  )
}

export default App
