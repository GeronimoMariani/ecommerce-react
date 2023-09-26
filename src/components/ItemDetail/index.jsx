import ItemCount from "../ItemCount";
import "./styles.css";

const ItemDetail = ( {item} ) => {
    return (
        <div className="container">
            <div>
                <img src={item.image} alt={item.name} />
            </div>
            <div className="detail">
                <h2>{item.name}</h2>
                <h3>${item.price}</h3>
                <h3>Stock:{item.stock}</h3>
                <ItemCount item={item} />
            </div>
        </div>
    )
}

export default ItemDetail