import {createContext} from 'react'
import logo from './logo.svg';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Nav from './lesson_3/componnents/nav';
import './App.css';
import DisplayIndex from './lesson1/lesson1';
 import NewPrint from './componants/newPrint'
 import Home from './lesson_3/screens/home';
import Galery from './lesson_3/screens/galery';
import { RouterProviderProps } from 'react-router-dom';
import About from './lesson_3/screens/about';
import Contect from './lesson_3/screens/contect';
import Thank from './lesson_3/componnents/Thenk';
import React from 'react';
import { Provider } from 'react-redux';
import store from './lesson_5/redux/store';
import Todos from './lesson_5/redux/Todos';


function App() {
  return (
    <div>
      <NewPrint></NewPrint>
 <Provider store={store} >
<Todos></Todos>

{/* 
<BrowserRouter>
<Nav></Nav>
  <Routes> 
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/galery" element={<Galery/>}/> 
    <Route path="/contect" element={<Contect/>}/> 
    <Route path="/thank" element={<Thank/>}/> 
</Routes>
</BrowserRouter> */}
</Provider>
 {/* <mycontaxt.Provider value={langrage}><myComponent/></mycontaxt.Provider> */}
    </div>

  );
}
export default App;



