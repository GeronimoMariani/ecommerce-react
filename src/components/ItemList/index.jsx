import Item from "../Item"
import "./styles.css"


const ItemList = ( {productos} ) => {

    return (
        <div className="container">
            <h1 className="mainTitle">Productos</h1>
            <div className="productos">
                { productos.map( (producto) => <Item producto={producto} key={producto.id} /> ) }
            </div>
        </div>
    )
}

export default ItemList