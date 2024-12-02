import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
