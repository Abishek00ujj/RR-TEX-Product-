import React from "react"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Index from './pages/Index.jsx';
import Home from './pages/Home.jsx'
import Po from './pages/Po.jsx'
import ProductSummary from "./components/ProductSummary.jsx";
function App(){
  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/createPo" element={<Po/>}/>
            <Route path="/product-summary" element={<ProductSummary/>}/>
          </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
