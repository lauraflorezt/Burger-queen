
import React from "react";
//import { useState } from 'react'

import { useRoutes,BrowserRouter } from 'react-router-dom';
import Login from '../Login';
import Mesero  from '../Mesero';
import Admin  from '../Admin'
import './App.css';

//enlazar rutas
const Approutes = () =>{
  let routes = useRoutes([
    { path: '/', element: <Login/>},
    { path: '/mesero', element: <Mesero/>},
    { path: '/admin', element: <Admin/>},
  ])
  
  return routes
}

function App() {
  //retornamos las rutas 
  return (
    // BrowserRouter muestra las rutas 
    <BrowserRouter> /
     <Approutes/>
    </BrowserRouter>
  );
}
export default App


