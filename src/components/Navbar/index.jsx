import logo from "../../assets/images/logo.png";
import CartWidget from "./CartWidget";
import { FiChevronDown } from "react-icons/fi";
import "./styles.css";

const Navbar = () => {
    return (
        <nav className="navBar">
            <div className="subNavBar">
                <div>
                    <a href="../../index.html"><img className="logo" src={logo} alt="logo" /></a>
                </div>
                <ul className="list">
                    <li className="navItem">
                        <button className="navButton">INICIO</button>
                    </li>
                    <li className="navItem productos">
                        <button className="navButton">PRODUCTOS <FiChevronDown/></button>
                        <ul className="subList">
                            <li><button className="navButton">NIKE</button></li>
                            <li><button className="navButton">ADIDAS</button></li>
                        </ul>
                    </li>
                    <li className="navItem">
                        <button className="navButton">CONTACTO</button>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    );
}

export default Navbar;