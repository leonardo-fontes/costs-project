import { Link } from "react-router-dom";
import logo from "../../img/costs_logo.png";

function Navbar(props) {
  return (
    <nav className="flex items-center justify-between py-6 px-20 text-xl font-sans font-bold text-[#fff] bg-[#333]">
      <Link to="/">
        <img src={logo} alt="Costs" />
      </Link>
      <ul className="flex gap-8">
        <li className="hover:text-[#ffbb33] duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-[#ffbb33] duration-300">
          <Link to="/projects">Projetos</Link>
        </li>
        <li className="hover:text-[#ffbb33] duration-300">
          <Link to="/company">Empresa</Link>
        </li>
        <li className="hover:text-[#ffbb33] duration-300">
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
