import { useState, useEffect } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const marca = useParams().marca;
    const [titulo, setTitulo] = useState("Productos");
    console.log(marca);
    useEffect(() => {
        pedirDatos()
            .then((res) => {
                if (marca) {
                    setProductos(res.filter((prod) => prod.marca === marca));
                    setTitulo(marca);
                } else {
                    setProductos(res);
                    setTitulo("Productos");
                }
            })
    }, [marca])
    
    return (
        <div>
            <ItemList productos={productos} titulo={titulo} />
        </div>
    );
}

export default ItemListContainer;