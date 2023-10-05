import './App.css'
import { Routes, Route } from "react-router-dom"
import Tailwind from './tailwind/Tailwind'
import Bootstrap from './bootstrap/Bootstrap'


function App() {
  
  return (
    <>
    <div className="App">
    <Routes>
      
        <Route path="/" element={ <Tailwind/> } />
        <Route path="/bootstrap" element={ <Bootstrap/> } />
        
      </Routes>
    </div>
    </>
  )
}

export default App
