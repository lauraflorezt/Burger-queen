//import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './login.css';
 const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  useEffect(()=>{
    fetch("http://localhost:8080/login ")
  .then((response) => response.json())  
	.then((data) => console.log(data));
  }, []);

  //const navigate = useNavigate();
return (
    <>
    <div>
      <img src="imagenes/hamburguesa-fondo.jpg" className="fondo" alt="fondo"/>
      </div>
      <div>
      <img src="imagenes/logoBurger.png" className="Logo" alt="logo"/>
      </div>
        <div>
          <form >
            <input required
              id="inputCorreo"
              placeholder="Correo electrónico"
              type="text"
              className="formularioLogin"
              
            />
            <br/>
            <input
              id="inputContraseña"
              placeholder="Contraseña "
              type="text"
              className="formularioLogin"
            />
          </form>
          <form>
          <button type="submit" className="btn">
                        Ingresar
                    </button>
          </form>
        </div>
     
      
    </>
  );
}
export default Login