import { NavLink } from 'react-router-dom'

function Admin() {
  return (
    
    <nav>
      <div>
      <img src="imagenes/logoBurger.png" className="Logo" alt="logo"/>
      </div>
    <ul>
  <li>
  <NavLink
    to='/Empleados'
    className={({ isActive }) =>
      isActive ? activeStyle : undefined
    }>
    Empleados
  </NavLink>
</li>
<li>
  <NavLink
    to='/productos'
    className={({ isActive }) =>
      isActive ? activeStyle : undefined
    }>
    productos
  </NavLink>
</li>
</ul>
</nav>
  )
  }
  export default Admin