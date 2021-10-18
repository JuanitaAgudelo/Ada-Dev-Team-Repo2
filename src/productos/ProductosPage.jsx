import React, { Fragment, useState, useEffect, Route } from 'react';
import { NavLink } from 'react-router-dom';
import './productosStyles.css';
import HeaderComponent from '../shared/components/header/HeaderComponent';
import FooterComponent from '../shared/components/footer/FooterComponent';
import Axios from 'axios';
//Importar axios = npm i axios

function ProductosPage(){

    const [product, setProduct] = useState({
        nombre: '',
        descripcion: '',
        valorUnitario: 0,
        estado: '' 
    })

    let{nombre, descripcion, valorUnitario, estado} = product

    const handleChange = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        valorUnitario = parseInt(valorUnitario, 10)
        //validación de los datos
        if (nombre === '' ||  descripcion === '' || valorUnitario <= 0 ||  estado === '' ) {
            alert('Todos los campos son obligatorios')
            return
        }

        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(product)
        }
        fetch('http://localhost:9000/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        const mensaje = 'Se ha registrado exitosamente el producto con nombre: '+nombre+', descripción: '+descripcion+', valor unitario: '+valorUnitario+' y estado: '+estado

        //reiniciando state de producto
        setProduct({
            nombre: '',
            descripcion: '',
            valorUnitario: 0,
            estado: '' 
        })
        
        alert(mensaje)
    }


    return(
        <Fragment>                      
        <div className="title">
            <h1>Productos</h1>
        </div>
        <div className="container">
            <div className="row">
                <div className="column-4">
                </div>
                <div className="column-4">
                <form onSubmit = {handleSubmit}>
                    <div className="formVendedores">                            
                            <div className="input-group mb-3 formulario">
                                <label htmlFor="nombre" className="form-label">Nombre</label>             
                                <input type="text" id = "nombre" className="form-control" name = "nombre" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={handleChange}/>
                            </div>                        
                            <div className="input-group mb-3"> 
                                <label htmlFor="descripcion" className="form-label">Descripción</label>           
                                <input type="text" id = "descripcion" className="form-control" name = "descripcion" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={handleChange}/>
                            </div>
                            <div className="input-group mb-3"> 
                                <label htmlFor="valorUnitario" className="form-label">Valor Unitario</label>           
                                <input type="number" id = "valorUnitario" className="form-control" name = "valorUnitario" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  onChange={handleChange} />
                            </div>                        
                            <div className="input-group mb-3 formulario">
                                <label htmlFor="estado" className="form-label">Estado</label>            
                                <input type="text" id = "estado" className="form-control" name = "estado" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"   onChange={handleChange}/>
                            </div>                         
                            <div className="d-grid gap-2 d-md-block"> 

                                <button type="submit" className="btn btn-primary mx-2">Registrar</button>                      
                                
                                <button className="btn btn-info mx-2" type="button"><NavLink to="/ListadoProductos" >Consultar</NavLink></button>
                            </div>
                    </div>
                </form>
                </div>
                <div className="column-4">
                </div>
            </div>
        </div> 
        {/* <!-- Modal --> */}
        <div className="modal" id='confirmProduct' tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirmar Registro Producto</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Id Producto" disabled/>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Nombre"/>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Descripción"/>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Valor Unitario"/>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Estado"/>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-primary"  data-bs-toggle="modal"  data-bs-target="#registerProduct">Registrar</button>
                    </div>
                </div>
            </div>
        </div>

      {/* <!-- Modal 2 --> */}

        <div class="modal" id="registerProduct" tabIndex="-1">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Producto Registrado</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">                    
                    <p>Se ha registrado el producto con id: ..., <br/>
                        con nombre: ..., <br/>
                        con la siguiente descripción: ..., <br/>
                        y estado: ...</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>              
                </div>
            </div>
            </div>
        </div>      
            
        </Fragment>
    )
}

export default ProductosPage;

