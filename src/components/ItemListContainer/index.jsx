import { useState, useEffect } from "react";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { Oval } from  'react-loader-spinner';


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { marca } = useParams();
    const [titulo, setTitulo] = useState("Productos");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const db = getFirestore();
        const productsRef = collection(db, "productos");
        const q = marca ? query(productsRef, where("marca", "==", marca)) : productsRef;
        getDocs(q).then((snapshot) => {
            if (marca) {
                setProductos(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
                setTitulo(marca);
                setLoading(false);
            } else {
                setProductos(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
                setTitulo("Productos");
                setLoading(false);
            }
        })
    }, [marca])
    
    return (
        <div>
            {loading ? (<div className="loading"><Oval height={80} width={80} color="#144999" wrapperStyle={{}} wrapperClass="" visible={true} ariaLabel='oval-loading' secondaryColor="144999" strokeWidth={2} strokeWidthSecondary={2}/></div>) :
            (<ItemList productos={productos} titulo={titulo} />)
            }
        </div>
    );
}

export default ItemListContainer;