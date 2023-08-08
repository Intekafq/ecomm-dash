import logo from "./logo.svg";
import "./App.css";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import Protected from './components/Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    
        
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/add"  element={<Protected Component={AddProduct} />}/>
          <Route path="/update"  element={<Protected Component={UpdateProduct} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
