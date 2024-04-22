import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">FarmAPI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/home"}>Inicio</Link>
          </li>
          <li>
            <Link to={"/category"}>Categoria</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
