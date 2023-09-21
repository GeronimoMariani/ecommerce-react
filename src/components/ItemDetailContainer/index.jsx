import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Oval } from  'react-loader-spinner';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, "productos", id);
        getDoc(itemRef).then((resp) => {
            setItem({id: resp.id, ...resp.data()});
            setLoading(false);
        })
    }, [id])
    
    return (
        <div>
            {loading ? (<div className="loading"><Oval height={80} width={80} color="#144999" wrapperStyle={{}} wrapperClass="" visible={true} ariaLabel='oval-loading' secondaryColor="144999" strokeWidth={2} strokeWidthSecondary={2}/></div>) :
            item && <ItemDetail item={item} />
            }
        </div>
    )
}

export default ItemDetailContainer