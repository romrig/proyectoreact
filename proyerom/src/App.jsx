import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <div>
    <NavBar/>
   </div>
    </div>
  )
}

export default App