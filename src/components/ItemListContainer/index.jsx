import { useState, useEffect } from "react";
import "./styles.css";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemList from "../ItemList";


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res);
            })
    }, [])
    
    return (
        <div>
            <ItemList productos={productos} />
        </div>
    );
}

export default ItemListContainer;