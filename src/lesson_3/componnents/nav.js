import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../screens/home";
import Galery from "../screens/galery";
import Contect from "../screens/contect";
import About from "../screens/about";

  export default function Nav(){
return(

    <BrowserRouter>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link" to="/Home">home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Galery">galery</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">about</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contect">contect</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <Routes>
    
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/galery" element={<Galery/>}/> 
        <Route path="/contect" element={<Contect/>}/> 
  </Routes>
  </BrowserRouter>

);
  }