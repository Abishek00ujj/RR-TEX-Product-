import React from "react"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Index from './pages/Index.jsx';
import Home from './pages/Home.jsx'
import Po from './pages/Po.jsx'

function App(){
  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/createPo" element={<Po/>}/>
          </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
