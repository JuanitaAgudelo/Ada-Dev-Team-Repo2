import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './css/styles.css';
import logogmail from "./img/gmail.png";
import logoAda from "./img/logo.jpeg"
import { useAuth0 } from "@auth0/auth0-react";
import Home from '../Home/Home';
import { NavLink } from 'react-router-dom';
import apiBaseUrl from "../shared/Utils/Api";

function Login() {

    const submitEmail = () => {
        try {
            Axios.post(`${apiBaseUrl}/add-usuario`, { name: user.name, correo: user.email, rol: 'Pendiente', estado: 'Pendiente' })
        }
        catch (error) {
            console.error("Usuario ya existe");
        }
    }
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated } = useAuth0();
    const home = () => {
        window.location.href = "http://localhost:3000/Home";
        
    };
    return (
        <div className="Login" pb-5>
            <div className="container w-100 bg-primary mt-4 mb-4 rounded shadow" >
                <div className="row align-items-center align-items-stretch">
                    <div className="col d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded bg">
                    </div>
                    <div className="col bg-white pb-5 col-lg-7 col-xl-6 rounded-end">
                        <div className="text-end mt-3 mb-4">
                            <img src={logoAda} alt="" className="pt-1 anchoimagen" />
                        </div>
                        {isAuthenticated ? <h2 className="fw-bold text-center pt-5 mb-5">Hola {user.name}</h2> : <h2 className="fw-bold text-center pt-5 mb-5">Bienvenido</h2>}
                        <div className="w-75 my-4 ms-5 d-grid">
                            {isAuthenticated ?
                                submitEmail()
                                : ""
                            }

                            {isAuthenticated ?
                                <div>
                                    <NavLink className="btn btn-primary mb-4 btn-ingresar"  to="/Home" >Ingresar a AdaSoft</NavLink>
                                    <button className="btn btn-light btn-outline-dark border-primary mt-5 btn-ancho" onClick={() => logout({ returnTo: window.location.origin })}>Cierra Sesión</button>
                                </div>
                                : <div>
                                    <button onClick={() => loginWithRedirect()} className="btn btn-primary mb-4 btn-ancho" type="button"><img src={logogmail} width="30px" alt="" className="me-4" />
                                        Inicia Sesión
                                    </button>
                                    <div className="pt-5 mt-5"></div>
                                </div>}
                        </div>
                        <div className="text-center mt-3 mb-4">
                            <img src={logoAda} alt="" className="pt-1 anchoimagen" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;