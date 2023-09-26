import React from 'react';
import "./styles.css";
import { useForm } from 'react-hook-form';

const Contacto = () => {

    const {register, handleSubmit} = useForm();

    const enviar = (form) => {
        console.log(form);
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