import "./styles.css";

const ItemDetail = ( {item} ) => {
    return (
        <div className="container">
            <div>
                <img src={item.image} alt={item.nombre} />
            </div>
            <div className="detail">
                <h2>{item.nombre}</h2>
                <h3>${item.precio}</h3>
                <a className="comprar" href="https://www.instagram.com/" target="_blank">COMPRAR</a>
            </div>
        </div>
    )
}

export default ItemDetail