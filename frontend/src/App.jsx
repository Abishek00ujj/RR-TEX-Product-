import React from "react"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Index from './pages/Index.jsx';
import Home from './pages/Home.jsx'
import Po from './pages/Po.jsx'
// import ProductDetails from './pages/managePo.jsx'
import ProductSummary from "./components/ProductSummary.jsx";
import AddEmployee from "./pages/AddEmp.jsx";
import POList from "./pages/POList.jsx";
import ProductEdit from "./components/ProductEdit.jsx";
import ManageEmployee from "./pages/ManageEmployee.jsx";
import EmployeeProfile from "./components/EmployeeProfile.jsx";
import PurchaseOrderDetail from "./pages/displayPo.jsx";
import ManageSalary from "./pages/ManageSalary.jsx"; // Import the new component

function App(){
  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/createPo" element={<Po/>}/>
            <Route path="/managePo" element={<POList/>}/>
            <Route path="/edit" element={<ProductEdit/>}/>
            <Route path="/viewPo" element={<PurchaseOrderDetail />}/>
            <Route path="/product-summary" element={<ProductSummary/>}/>
            <Route path="/add-employee" element={<AddEmployee/>}/>
            <Route path="/manageEmployee" element={<ManageEmployee />} />
            <Route path="/employee" element={<EmployeeProfile />} />
            <Route path="/manage-salary" element={<ManageSalary />} /> {/* Add the new route */}
          </Routes>
       </BrowserRouter>
    </>
  )
}

export default App