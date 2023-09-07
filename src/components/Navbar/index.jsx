import logo from "../../assets/images/logo.png";
import CartWidget from "./CartWidget";
import { FiChevronDown } from "react-icons/fi";
import "./styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navBar">
            <div className="subNavBar">
                <div>
                    <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
                </div>
                <ul className="list">
                    <li className="navItem">
                        <Link to="/" className="navButton">INICIO</Link>
                    </li>
                    <li className="navItem productos">
                        <Link to="" className="navButton">PRODUCTOS <FiChevronDown/></Link>
                        <ul className="subList">
                            <li><Link to="" className="navButton">NIKE</Link></li>
                            <li><Link to="" className="navButton">ADIDAS</Link></li>
                        </ul>
                    </li>
                    <li className="navItem">
                        <Link to="" className="navButton">GUÍA DE TALLES</Link>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    );
}

export default Navbar;