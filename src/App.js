import logo from './logo.svg';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Nav from './lesson_3/componnents/nav';
import './App.css';
import DisplayIndex from './lesson1/lesson1';
// import FromPizza from './lesson_2/lesson2';
 import NewPrint from './componants/newPrint'
 import Home from './lesson_3/screens/home';
import Galery from './lesson_3/screens/galery';
import { RouterProviderProps } from 'react-router-dom';
import About from './lesson_3/screens/about';
import Contect from './lesson_3/screens/contect';
import Thank from './lesson_3/componnents/Thenk';

function App() {
  return (
    <div>
    
<BrowserRouter>
<Nav></Nav>
  <Routes> 
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/galery" element={<Galery/>}/> 
    <Route path="/contect" element={<Contect/>}/> 
    <Route path="/thank" element={<Thank/>}/> 
</Routes>
</BrowserRouter>

    </div>

  );
}

export default App;
