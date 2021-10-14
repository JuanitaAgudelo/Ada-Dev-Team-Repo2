import React, { Fragment, useState, Route } from 'react';
import { NavLink } from 'react-router-dom';
import ventas from "./img/venta.jpg";
import productos from "./img/productos.jpg";
import roles from "./img/roles.jpg";
import "./style.css"
function home(){
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

export default home;