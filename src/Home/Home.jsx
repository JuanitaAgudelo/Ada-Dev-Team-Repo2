import React, { Fragment, useState, useEffect, Route } from 'react';
import { NavLink } from 'react-router-dom';
import ventas from "./img/venta.jpg";
import productos from "./img/productos.jpg";
import roles from "./img/roles.jpg";
import noAutorizado from "./img/noAutorizado.jpeg"
import "./style.css"
import axios from 'axios';
import apiBaseUrl from "../shared/Utils/Api";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from 'react-router-dom';

function Home(){

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


    return(
    
         <Fragment>
        <div className="containerC">
        {(rol.rol == "Administrador" || rol.rol == "Vendedor") && rol.estado=="Autorizado"?
            <div className="card">
                <NavLink to={`/Ventas/${correo}`} ><img src={ventas} alt="Ventas"/></NavLink>
                <h3>Ventas</h3>
            </div>: "" 
        }
        {rol.rol == "Administrador" && rol.estado=="Autorizado"? 
            <div className="card">
                <NavLink to={`/Productos/${correo}`} ><img src={productos} alt="Productos"/></NavLink>
                <h3>Productos</h3>
            </div>: ""
                            }
        {rol.rol == "Administrador" && rol.estado=="Autorizado"? 
            <div className="card">
                <NavLink to={`/Usuarios/${correo}`} ><img src={roles} alt="Usuarios"/></NavLink> 
                <h3>Usuarios</h3> 
            </div> : ""
        }
        {rol.rol=="Pendiente" || rol.estado=="No Autorizado"?
            <div className="card">
                <img src={noAutorizado} alt="Usuarios"/>
                <h3>Por favor espere a que el administrador autorice su ingreso</h3> 
            </div> : ""
        }
        </div>
       
        </Fragment>   
    );
}

export default Home;