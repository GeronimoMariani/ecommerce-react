import Item from "../Item";
import "./styles.css";
import { toCapital } from "../../helpers/toCapital";


const ItemList = ( {productos, titulo} ) => {

    return (
        <div>
            <h1 className="mainTitle">{toCapital(titulo)}</h1>
            <div className="containerProductos">
                { productos.map( (producto) => <Item producto={producto} key={producto.id} /> ) }
            </div>
        </div>
    )
}

export default ItemList