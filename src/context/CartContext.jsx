import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const localCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ( {children} ) => {
    const [carrito, setCarrito] = useState(localCarrito);

    const agregarAlCarrito = (item, count) => {
        const itemAgregado = { ...item, cantidad: count };
        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);
        if (estaEnElCarrito) {
        estaEnElCarrito.count += count;
        } else {
        nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
        console.log(nuevoCarrito);
    };

    const cantidadCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    };

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
    };

    const handleDeleteItem = (id) => {
        const remove = carrito.filter((item) => item.id !== id);
        console.log(remove);
        setCarrito(remove);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);
    

    return (
        <CartContext.Provider value={{carrito, agregarAlCarrito, cantidadCarrito, precioTotal, vaciarCarrito, handleDeleteItem}}>
            {children}
        </CartContext.Provider>
    )
};
