import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsTrash3 } from "react-icons/bs";
import { ImSad } from "react-icons/im";
import "./styles.css";
import { Link } from 'react-router-dom';

const Cart = () => {

    const { carrito, precioTotal, vaciarCarrito, handleDeleteItem } = useContext(CartContext);

    return (
        <div>
            <h1 className='mainTitle'>Carrito</h1>
            <div className='containerCarrito'>
                {carrito.map((prod) => (
                        <div className='boxCarrito' key={prod.id}>
                            <img src={prod.image} alt={prod.name} />
                            <div className="boxDetalles">
                                <div className="detalles">
                                    <h2>{prod.name}</h2>
                                    <h3>Precio por unidad: ${prod.price}</h3>
                                    <h3>Precio total: ${prod.price * prod.cantidad}</h3>
                                    <h3>Cantidad: {prod.cantidad}</h3> 
                                </div>
                                <div className='trash'>
                                    <button className='buttonTrash' onClick={() => handleDeleteItem(prod.id)}><BsTrash3 /></button>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
            {
                carrito.length > 0 ?
                <div className='total'>
                    <div className='comprar'>
                        <h2>Total:{precioTotal()}</h2>
                        <Link to="/checkout">Comprar</Link>
                    </div>
                    <button onClick={vaciarCarrito}>Vaciar carrito</button>
                </div> :
                <h2 className='carritoVacio'>Su carrito está vacío <ImSad /></h2>
            }
        </div>
    )
}

export default Cart