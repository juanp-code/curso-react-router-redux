import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/containers/Register.scss'

const Register = () => {

    const[form, setValues] = useState({
        name: '',
        email: '',
        pass: ''
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name] : event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(form);
    }

    return(
        <section className="register">
            <section className="register__container">
                <h2>Regístrate</h2>
                <form className="register__container--form" onSubmit={handleSubmit}>
                    <input className="input" name="name" onChange={handleInput} type="text" placeholder="Nombre" />
                    <input className="input" name="email" onChange={handleInput} type="text" placeholder="Correo" />
                    <input className="input" name="pass" onChange={handleInput} type="password" placeholder="Contraseña" />
                    <button className="button">Registrarme</button>
                </form>
                <Link to="/login">
                    Iniciar sesión
                </Link>
            </section>
        </section>
    );
}

export default Register;