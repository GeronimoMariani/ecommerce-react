import { Link } from "react-router-dom";
import "./styles.css";
import { AiOutlineEye } from "react-icons/ai";

const Item = ( {producto} ) => {
    return (
        <div className="producto">
            <img src={producto.image} alt={producto.name} />
            <h2>{producto.name}</h2>
            <h3>${producto.price}</h3>
            <Link className="verMas" to={`/item/${producto.id}`}><AiOutlineEye/> Ver más</Link>
        </div>
    )
}

export default Item