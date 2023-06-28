import Layout from "../../components/Layout";
import { useState, useEffect } from 'react';
import NavBar from "./NavbarMesero.jsx";
import Card from '../../components/Card';
import axios from 'axios';
import ProductDetail from '../../components/ProductDetail';

const dominiolocal = 'http://localhost:8080';

function Mesero({ token }) {
  const [NombreCliente, setNombreCliente] = useState('');
  const [NumeroMesa, setNumeroMesa] = useState('');
  const [items, setItems] = useState([]);
  const [almuerzoItems, setAlmuerzoItems] = useState([]);
  const [desayunoItems, setDesayunoItems] = useState([]);
  const [selectedSection, setSelectedSection] = useState('desayuno');

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
        
        // Filtrar los elementos de almuerzo y desayuno según su tipo
        const almuerzo = response.data.filter(item => item.type === 'almuerzo');
        const desayuno = response.data.filter(item => item.type === 'desayuno');
        
        setAlmuerzoItems(almuerzo);
        setDesayunoItems(desayuno);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItems();
  }, [token]);

  return (
    <>
      <Layout>
            <NavBar/>
            <div className='bg-gray-100 '>
          <div className=" justify-end py-7 ml-80">
            <img src="imagenes/logoBurger.png" alt="logo" className="mt-4" />
          </div>
          <div>
            <form className="cursor-pointer">
              <input
                className="text-black border-none w-80 text-xl mx-auto my-4  rounded-lg p-4 shadow-md bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400"
                id="inputMesa"
                placeholder="Numero de mesa"
                type="text"
                value={NumeroMesa}
                onChange={(e) => setNumeroMesa(e.target.value)}
              />
              <br />
              <input
                className='text-black border-none text-xl w-80 mx-auto my-4 rounded-lg p-4 shadow-md bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400'
                id="InputClienta"
                placeholder="Nombre cliente"
                type="text"
                value={NombreCliente}
                onChange={(e) => setNombreCliente(e.target.value)}
              />
            
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {items.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
      <table>
  <tbody>
    <tr key="almuerzo">
      <td>
      <button onClick={() => setSelectedSection('almuerzo')}>ALMUERZO</button>
        <div className='grid gap-4 grid-cols-4 max-w-screen-lg '>
        {selectedSection === 'almuerzo' &&
    almuerzoItems.map((item) => <Card key={item.id} data={item} />)}
        </div>
      </td>
    </tr>
    <tr key="desayuno">
      <td>
      <button onClick={() => setSelectedSection('desayuno')}>DESAYUNO</button>
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {selectedSection === 'desayuno' &&
    desayunoItems.map((item) => <Card key={item.id} data={item} />)}
        </div>
      </td>
    </tr>
  </tbody>
</table>
</form>
          </div>
        </div>
        <ProductDetail />
      </Layout>
    </>
  );
}

export default Mesero;