import React, { useState, useEffect, Route } from 'react';
import { NavLink } from 'react-router-dom';
import barrasmenu from "./img/bars-solid.svg";
import usuario from "./img/user-regular.svg";
import logo from "./img/índice.jpg";
import './Headerstyle.css';
import { useParams } from 'react-router-dom';
import apiBaseUrl from "../../Utils/Api";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

function HeaderComponent() {

    const { logout } = useAuth0();
    const {user, isAuthenticated} = useAuth0();
    
    const[botonActivoUsuario, setBotonActivoUsuario]=useState(true);
    const[botonActivoVentas, setBotonActivoVentas]=useState(true);
    const[botonActivoProductos, setBotonActivoProductos]=useState(true);

    const {correo}=useParams()

    const[rol, setRol]=useState({ usuario: [] });

    const getRol=()=>{
        axios.get(`${apiBaseUrl}/get-informacion-usuario/${correo}`).then((response)=>{
            setRol(response.data[0])  
        }
    );}
    useEffect(() => {
        getRol();
    }, []);
    console.log(rol.rol)

    

    return (
        <header>
            <nav className="navbar navbar-expand-xl bg-primarycolor">
                <div className="container-fluid">
                    <img id="Logo" className="d-inline-block align-top" src={logo} alt="Logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <img src={barrasmenu} className="img-small" alt="Usuario" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="nav nav-navs">
                            <li className="nav-item" >
                                <NavLink to={`/Home/${correo}`} className="nav-link" aria-current="" >Home</NavLink>
                            </li>
                            {(rol.rol == "Administrador" || rol.rol == "Vendedor") && rol.estado=="Autorizado"? 
                            <ul className="nav nav-navs">
                                <li className="nav-item">
                                    <NavLink to={`/Ventas/${correo}`} className="nav-link" aria-current="" disabled>Ventas</NavLink>
                                </li>
                            </ul>: ""    
                            }
                            {rol.rol == "Administrador" && rol.estado=="Autorizado"? 
                            <ul className="nav nav-navs">
                                <li className="nav-item">
                                <NavLink to={`/Productos/${correo}`} className="nav-link" aria-current="">Productos</NavLink>
                                </li>
                    
                                <li className="nav-item">
                                <NavLink to={`/Usuarios/${correo}`} className="nav-link" aria-current="">Usuarios</NavLink>
                                </li>
                            </ul>: ""
                            }
                            
                        </ul>
                    </div>
                    <div id="dropdown-div" className="dropdown">
                        <a id="dropdown-user" className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <img src={usuario} className="img-small" alt="Usuario"/>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item">{isAuthenticated ? user.name : "User"}</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                {isAuthenticated ? <a className="dropdown-item" href="#" onClick={() => logout({ returnTo: window.location.origin })}>Cerrar sesión</a> : null}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default HeaderComponent;