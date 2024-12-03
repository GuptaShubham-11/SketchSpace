import { useState } from 'react'
import './App.css'
import {CanvasBoard} from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CanvasBoard />
    </>
  )
}

export default App
