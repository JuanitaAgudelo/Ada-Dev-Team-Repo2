import React, { Fragment, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import cheque from "./img/cheque.png";
import "./VentasStyles.css";
import axios from 'axios';
import apiBaseUrl from "../shared/Utils/Api";
import { useParams } from 'react-router-dom';


function Ventas() {

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

    const[precioUnitario, setPrecioUnitario]=useState('')
    const[cantidad, setCantidad]=useState('')
    const[valorTotal, setValorTotal]=useState('')
    const[fecha, setFecha]=useState('')
    const[nombreCliente, setNombreCliente]=useState('')
    const[documentoCliente, setDocumentoCliente]=useState('')
    const[vendedor, setVendedor]=useState('')
    const[Usuarios_id, setUsuarios_id]=useState('')
    const[Productos_id, setProductos_id]=useState('')

    const addVenta = () => {
        
        axios.post(`${apiBaseUrl}/add-venta`,
            {
                precioUnitario: precioUnitario,
                cantidad: cantidad, 
                valorTotal: valorTotal,
                fecha: fecha, 
                nombreCliente: nombreCliente,
                documentoCliente: documentoCliente,
                vendedor: vendedor,
                Usuarios_id: Usuarios_id,
                Productos_id: Productos_id
            }
        );
        //const jsonResponse = await response.json();
        
        
    };


    return (
        <Fragment>
            <div class="title">
                <h1>Registro de Ventas</h1>
            </div>
            <div class="container">
                <div class="row">
                    <div class="column-4">
                    </div>
                    <div class="column-4">
                        <div class="formVentas">
                            <div class="input-group mb-3 formulario">
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Productos ID" onChange={(e)=>{
                                    setProductos_id(e.target.value)
                                }}/>
                            </div>
                            <div class="input-group mb-3 formulario">
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Valor Unitario" onChange={(e)=>{
                                    setPrecioUnitario(e.target.value)
                                }}/>
                            </div>
                            <div class="input-group mb-3 formulario">
                                <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Cantidad" onChange={(e)=>{
                                    setCantidad(e.target.value)
                                }}/>
                            </div>
                            <div class="input-group mb-3 formulario">
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Valor Total" onChange={(e)=>{
                                    setValorTotal(e.target.value)
                                }}/>
                            </div>
                            <div class="input-group mb-3 formulario">
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Fecha Venta" onChange={(e)=>{
                                    setFecha(e.target.value)
                                }}/>
                            </div>
                            
                            <div class="input-group mb-3 formulario">
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Nombre Cliente" onChange={(e)=>{
                                    setNombreCliente(e.target.value)
                                }}/>
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Id Cliente" onChange={(e)=>{
                                    setDocumentoCliente(e.target.value)
                                }}/>
                            </div>
                            <div class="input-group mb-3 formulario">
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Nombre Vendedor" onChange={(e)=>{
                                    setVendedor(e.target.value)
                                }}/>
                            </div>
                            <div class="input-group mb-3 formulario">
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Usuario ID" onChange={(e)=>{
                                    setUsuarios_id(e.target.value)
                                }}/>
                            </div>
                            

                            <div className="d-grid gap-2 d-md-block">
                            <a href="#" class="cta"><button class="btn btn-success" type="submit" data-bs-toggle="modal" data-bs-target="#modal2" onClick={addVenta}>Registrar</button></a>
                                <button className="btn btn-info mx-2" type="button"><NavLink to={`/InformeVentas/${correo}`} >Consultar ventas</NavLink></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" tabindex="-1" id="modal2">
                <div class="modal-dialog modal-sm modal-dialog-centered ">
                    <div class="modal-content borde">
                        <div class="modal-body">
                            <img src={realizado} width="50px"/>
                            Se registró la venta correctamente </div>
                    </div>
                </div>
            </div>




        </Fragment>
    )
}

export default Ventas;
