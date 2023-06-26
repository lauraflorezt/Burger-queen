import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import axios from 'axios';

const dominiolocal = 'http://localhost:8080';

const Login = ({ updateToken }) => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const httpLogin = async (usuario, contraseña) => {
    try {
      const response = await axios.post(
        `${dominiolocal}/login`,
        {
          email: usuario,
          password: contraseña,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error(error);
      setError('Hubo un error al iniciar sesión. Por favor, intenta nuevamente.');
      return error;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = await httpLogin(usuario, contraseña);

    updateToken(data.accessToken);

    if (data.user.role === 'admin') {
      navigate('/admin');
    } else if (data.user.role === 'chef') {
      navigate('/chef');
    } else if (data.user.role === 'mesero') {
      navigate('/mesero');
    } else {
      setError('Credenciales inválidas. Por favor, verifica tu correo electrónico y contraseña.');
    }
  };

  useEffect(() => {
    updateToken('');
  }, []);

  return (
    <>
      <Layout>
        <div className="relative cursor-pointer ">
          <img
            className="absolute mt-1 top-0 left-0 z-0 h-full opacity-60"
            src="imagenes/hamburguesa-fondo.jpg"
            alt="fondo"
          />

          <div className="relative z-10">
            <img className="w-50 m-auto  md:mt-70" src="imagenes/logoBurger.png" alt="logo" />

            <form onSubmit={handleLogin} className="mx-auto max-w-lg">
              <input required
                className="text-black border-none text-xl w-full mx-auto my-3 rounded-xl p-4 shadow-md bg-gradient-to-b"
                type="text"
                placeholder="Correo electrónico"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
              <input required
                type="password"
                placeholder="Contraseña"
                className="text-black border-none text-xl w-full mx-auto my-3 rounded-lg p-4 shadow-md bg-gradient-to-b "
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
              />
              <button
                type="submit"
                className= 'bg-yellow-200 text-black justify-center my-10 py-1 text-2xl w-48 h-12 mx-auto rounded-lg border border-black'
              >
                Ingresar
            </button>
            <div>{error && <p className="text-black-500 ">{error}</p>}</div>
          </form>
        </div>
      </div>
    </Layout>
    </>
  );
};

export default Login;
  

  
