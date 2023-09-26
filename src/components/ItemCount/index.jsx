import React, { useContext, useState } from 'react'
import "./styles.css";
import { CartContext } from '../../context/CartContext';

const ItemCount = ( {item} ) => {
    const [count, setCount] = useState(1);
    const { carrito, agregarAlCarrito } = useContext(CartContext);

    const handleRestar = () => {
        count >1 && setCount(count - 1)
    }

    const handleSumar = () => {
        count < item.stock && setCount(count + 1)
    }

    return (
        <div>
            <div className="itemCount">
                <button onClick={handleRestar}>-</button>
                <p>{count}</p>
                <button onClick={handleSumar}>+</button>
            </div>
            <button className='addCart' onClick={() => {agregarAlCarrito(item, count)}}>AGREGAR AL CARRITO</button>
        </div>
    )
}

export default ItemCount