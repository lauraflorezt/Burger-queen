import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; // permite agregar y utilizar el estado en componentes funcionales
import axios from 'axios' // para la peticion HTTp;
import './login.css';

//formulario para inicion de sesion 
const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realizar la petición POST al servidor
    axios
      .post('http://localhost:8080/login', { usuario, contrasena })
      .then(response => {
        // Procesar la respuesta exitosa
        console.log(response.data);
        // Redirigir a la pagina de mesero 
        navigate('/Mesero');
      })
      .catch(error => {
        // Manejar el error de la petición
        console.error(error);
      });
  };

  return (
    <>
    <div>
      <img src="imagenes/hamburguesa-fondo.jpg" className="fondo" alt="fondo"/>
      </div>
      <div>
      <img src="imagenes/logoBurger.png" className="Logo" alt="logo"/>
      </div>
    <div>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Correo electrónico"
          className="formularioLogin"
          value={usuario}
          onChange={(event) => setUsuario(event.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="formularioLogin"
          value={contrasena}
          onChange={(event) => setContrasena(event.target.value)}
        />
         <button type="submit" className="btn">Ingresar</button>
      </form>
    </div>
    </>
  );
};

export default Login;
  

  
