import React, { Fragment, useState, Route } from 'react';
import { NavLink } from 'react-router-dom';
import ventas from "./img/venta.jpg";
import productos from "./img/productos.jpg";
import roles from "./img/roles.jpg";
import "./style.css"
import axios from 'axios';
import apiBaseUrl from "../shared/Utils/Api";
import { useAuth0 } from "@auth0/auth0-react";

function Home(){
    const getUsuario=()=>{
        axios.get(`${apiBaseUrl}/add-usuario`).then((response)=>{
            
        }
    );}
    
    return(
        <Fragment>
        <br/>
        <div className="containerC">
            <div className="card">
                <NavLink to="/Ventas" ><img src={ventas} alt="Ventas"/></NavLink>
                <h3>Ventas</h3>
            </div>

            <div className="card">
                <NavLink to="/Productos" ><img src={productos} alt="Productos"/></NavLink>
                <h3>Productos</h3>
            </div>

            <div className="card">
                
                <NavLink to="/Usuarios" ><img src={roles} alt="Usuarios"/></NavLink> 
                <h3>Usuarios</h3> 
            </div> 
        </div>
        <br/>
        </Fragment>        
    );
}

export default Home;