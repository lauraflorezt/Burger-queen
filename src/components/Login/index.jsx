import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; // permite agregar y utilizar el estado en componentes funcionales
import axios from 'axios' // para la peticion HTTp;
import './login.css';

//formulario para inicion de sesion 
const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realizar la petición POST al servidor
    axios
      .post('http://localhost:8080/login', { usuario, contraseña },
      { headers: { 'Content-Type': 'application/json' }, 
    }).then(response => {
        // Procesar la respuesta exitosa
        console.log(response.data);
        // Redirigir a la pagina de mesero 
        navigate('/Mesero');
         // Acceder al accessToken en la respuesta
         const accessToken = response.data.accessToken;
         setAccessToken(accessToken);
         // Utilizar el accessToken como sea necesario, por ejemplo, guardarlo en el estado o en el almacenamiento local
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
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="formularioLogin"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
         <button type="submit" className="btn">Ingresar</button>
      </form>
    </div>
    </>
  );
};

export default Login;
  

  
