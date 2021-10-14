import React from "react";
import { NavLink } from 'react-router-dom';
import barrasmenu from "./img/bars-solid.svg";
import usuario from "./img/user-regular.svg";
import logo from "./img/índice.jpg";
import './Headerstyle.css';
import { useAuth0 } from "@auth0/auth0-react";
function HeaderComponent() {
    const { loginWithRedirect } = useAuth0();
    const { logout }= useAuth0();
    const { user, isAuthenticated }= useAuth0();
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
                            <li className="nav-item">
                                <button className="nav-link" aria-current="" on onClick={() => loginWithRedirect()}>Login</button>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Home" className="nav-link" aria-current="">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Ventas" className="nav-link" aria-current="">Ventas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Productos" className="nav-link" aria-current="">Productos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Usuarios" className="nav-link" aria-current="">Usuarios</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div id="dropdown-div" className="dropdown">
                        <a id="dropdown-user" className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <img src={usuario} className="img-small" alt="Usuario"/>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">{isAuthenticated ? user.name: "user"}</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="#" onClick={()=>logout({returnTo: window.location.origin })}>Cerrar sesión</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default HeaderComponent;