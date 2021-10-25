import React, { Fragment, useState, useParams, useEffect, Route } from 'react';
import { NavLink } from 'react-router-dom';
import ventas from "./img/venta.jpg";
import productos from "./img/productos.jpg";
import roles from "./img/roles.jpg";
import "./style.css"
import axios from 'axios';
import apiBaseUrl from "../shared/Utils/Api";
import { useAuth0 } from "@auth0/auth0-react";

function Home(){
    
    const[botonActivoUsuario, setBotonActivoUsuario]=useState();
    const[botonActivoVentas, setBotonActivoVentas]=useState();
    const[botonActivoProductos, setBotonActivoProductos]=useState();
    
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
    
    useEffect(() => {
        if(rol.rol=="Vendedor"){
            setBotonActivoUsuario(false)
            setBotonActivoVentas(true)
            setBotonActivoProductos(true)
            alert(botonActivoProductos, botonActivoUsuario, botonActivoVentas)
            console.log(botonActivoProductos, botonActivoUsuario, botonActivoVentas)
            
        }else if(rol.rol=="Administrador"){
            
            setBotonActivoUsuario(true)
            setBotonActivoVentas(true)
            setBotonActivoProductos(true)
            alert(botonActivoProductos, botonActivoUsuario, botonActivoVentas)
            console.log(botonActivoProductos, botonActivoUsuario, botonActivoVentas)

        }else if(rol.rol=="Pendiente"){
            setBotonActivoUsuario(false)
            setBotonActivoVentas(false)
            setBotonActivoProductos(false)
            alert(botonActivoProductos, botonActivoUsuario, botonActivoVentas)
            console.log(botonActivoProductos, botonActivoUsuario, botonActivoVentas)

        }
    }, []);
  
    return(
        <Fragment>
        <br/>
        <div className="containerC">
            <div className="card">
                <img src={ventas} alt="Ventas"/>
                <h3>Ventas</h3>
                <button className="btn btn-info mx-2" type="button" disabled={!botonActivoVentas} ><NavLink to="/Productos" >Productos</NavLink></button>
            </div>

            <div className="card">
                 <img src={productos} alt="Productos"/>
                <h3>Productos</h3>
                <button className="btn btn-info mx-2" type="button" disabled={!botonActivoProductos}><NavLink to="/Productos" >Productos</NavLink></button>
            </div>

            <div className="card">
                 <img src={roles} alt="Usuarios" disabled={true}/>
                <h3>Usuarios</h3> 
                <button className="btn btn-info mx-2" type="button" disabled={!botonActivoUsuario}><NavLink to="/Productos" >Productos</NavLink></button> 
            </div> 
        </div>
        <br/>
        </Fragment>        
    );
}

export default Home;
