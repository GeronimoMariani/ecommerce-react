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
                <a className="comprar" href="https://www.instagram.com/" target="_blank">COMPRAR</a>
            </div>
        </div>
    )
}

export default ItemDetail