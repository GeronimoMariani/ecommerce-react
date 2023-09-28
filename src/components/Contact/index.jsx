import React, { useState } from 'react';
import "./styles.css";
import { useForm } from 'react-hook-form';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const Contacto = () => {

    const {register, handleSubmit} = useForm();
    const [userId, setUserId] = useState("");

    const enviar = (data) => {
        const user = {
            contact: data
        }
        const db = getFirestore();
        const userRef = collection(db, "contacto");
        addDoc(userRef, user)
            .then((doc) => {
                setUserId(doc.id);
            })
    }

    if(userId) {
        return (
            <div>
                <h1 className="mainTitle">Muchas gracias por contactarnos.</h1>
                <h2 className='userId'>A la brevedad nos pondremos en contacto con usted.</h2>
            </div>
        )
    }

    return (
        <div className='divForm'>
            <h1 className='mainTitle'>Contacto</h1>
            <form className='formulario' onSubmit={handleSubmit(enviar)}>
                <input type="text" placeholder='Ingresá tu nombre' {...register("nombre")} />
                <input type="email" placeholder='Ingresá tu e-mail' {...register("email")} />
                <input type="phone" placeholder='Ingresá tu teléfono' {...register("telefono")} />
                <textarea rows="4" cols="50" placeholder='Ingrese su mensaje' {...register("textarea")} />
                <button type='submit'>ENVIAR</button>
            </form>
        </div>
    )
}

export default Contacto