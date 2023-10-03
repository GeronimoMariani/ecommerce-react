import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { useForm } from 'react-hook-form';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import "./styles.css";

const Checkout = () => {

    const [orderId, setOrdertId] = useState("");

    const { carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

    const {register, handleSubmit, getValues} = useForm();

    const user = getValues("nombre");

    const buy = (data) => {
        const order = {
            client: data,
            order: carrito,
            total: precioTotal()
        }
        
        const db = getFirestore();
        const orderRef = collection(db, "pedidos");
        addDoc(orderRef, order)
            .then((doc) => {
                setOrdertId(doc.id);
                vaciarCarrito();
            })
    }

    if(orderId) {
        return (
            <>
                <h1 className="mainTitle">{`Muchas gracias por su compra ${user}.`}</h1>
                <h2 className='orderId'>Tu número de pedido es: {orderId}</h2>
            </>
        )
    }

    return (
        <div className='divForm'>
            <h1 className='mainTitle'>Finalizar compra</h1>
            <form className='formulario' onSubmit={handleSubmit(buy)}>
                <input type="text" placeholder='Ingresá tu nombre' {...register("nombre")} />
                <input type="email" placeholder='Ingresá tu e-mail' {...register("email")} />
                <input type="text" placeholder='Ingresá tu dirección' {...register("direccion")} />
                <input type="phone" placeholder='Ingresá tu teléfono' {...register("telefono")} />
                <button type='submit'>COMPRAR</button>
            </form>
    </div>
    )
}

export default Checkout