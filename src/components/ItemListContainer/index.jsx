import { useState } from "react";
import "./styles.css";

const ItemListContainer = ({ greeting }) => {
    const [titulo, setTitulo] = useState(greeting);

    function cambiarTitulo() {
        setTitulo("VAMOS A TENER UNA TIENDA DE SNEAKERS !!");
    }

    return (
        <div className="title">
            <h1>{titulo}</h1>
            <button className="btnRevelar" onClick={cambiarTitulo}>Revelar tienda</button>
        </div>
    );
}

export default ItemListContainer;