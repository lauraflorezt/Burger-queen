import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-100 flex justify-between fixed top-0 w-full py-4 px-10 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="text-black/60 font-semibold text-lg">Mesero:</li>
      </ul>
      <ul className="flex items-center gap-3">
        <li>
          <button
            type="submit"
            className="bg-yellow-300 cursor-pointer text-black py-1 text-2xl w-full h-12 m-2 rounded-lg border border-black"
          >
            <NavLink
              to="/Mesas"
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              Mesas
            </NavLink>
          </button>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            cerrar sesion
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;