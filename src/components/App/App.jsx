
import { useRoutes,BrowserRouter } from 'react-router-dom';
import { useState } from 'react'
import { ShoppingCartProvider } from '../../components/Context'
import Login from '../Login';
import Mesero  from '../Mesero';
import Admin  from '../Admin';
import Chef  from '../Chef';
import './App.css'

//enlazar rutas
const Approutes = () =>{

  const [token, setToken] = useState('')
   //Actualizara el token cuando alguien ingresa al sistema
  const updateToken = (miToken) => setToken(miToken)

  let routes = useRoutes([
    { path: '/', element: <Login updateToken={updateToken}/>},
    { path: '/mesero', element: <Mesero token={token}/>},
    { path: '/chef', element: <Chef/>},
    { path: '/admin', element: <Admin token={token} />},
  ])
  
  return routes
}

function App() {
  //retornamos las rutas 
  return (
    // BrowserRouter muestra las rutas 
    <ShoppingCartProvider>
    <BrowserRouter> 
     <Approutes/>
    </BrowserRouter>
    </ShoppingCartProvider>
  );
}
export default App


