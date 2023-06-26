import Layout from "../../components/Layout";
import { useState, useEffect } from 'react';
import NavBar from "./NavbarMesero.jsx";
import Card from '../../components/Card';
import axios from 'axios';

const dominiolocal = 'http://localhost:8080';

function Mesero(token) {
 
  
  const [NombreCliente, setNombreCliente] = useState('');
  const [NumeroMesa, setNumeroMesa] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${dominiolocal}/products`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        
        setItems(response.data);
      } catch (error) {
        console.error(error);
        return error;
      }
  };

    fetchItems();
  }, []);
  
  return (
    <>
      <NavBar />
      <Layout>
        <div className='bg-white/60 w-56 h-60 rounded-lg'>
          <img className='w-70 m-auto md:mt-60' src="imagenes/logoBurger.png" alt="logo" />
          <div>
            <form className="cursor-pointer">
              <input
                className="text-black border-none text-xl w-full mx-auto my-4 rounded-lg p-4 shadow-md bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400"
                id="inputMesa"
                placeholder="Numero de mesa"
                type="text"
                value={NumeroMesa}
                onChange={(e) => setNumeroMesa(e.target.value)}
              />
              <br />
              <input
                className='text-black border-none text-xl w-full mx-auto my-4 rounded-lg p-4 shadow-md bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400'
                id="InputClienta"
                placeholder="Nombre cliente"
                type="text"
                value={NombreCliente}
                onChange={(e) => setNombreCliente(e.target.value)}
              />
            </form>
          </div>
        </div>
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {items.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </Layout>
    </>
  );
}

export default Mesero;