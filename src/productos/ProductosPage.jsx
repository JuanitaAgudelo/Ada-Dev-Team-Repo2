import React, { Fragment, useState, Route } from 'react';
import { NavLink } from 'react-router-dom';
import './productosStyles.css';
import HeaderComponent from '../shared/components/header/HeaderComponent';
import FooterComponent from '../shared/components/footer/FooterComponent';

function ProductosPage(){
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
                <div className="formVendedores">
                        <div className="input-group mb-3 formulario">            
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Id Producto" disabled />
                        </div> 
                        <div className="input-group mb-3 formulario">            
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Nombre" />
                        </div>                        
                        <div className="input-group mb-3">            
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Descripción" />
                        </div>
                        <div className="input-group mb-3">            
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Valor Unitario" />
                        </div>                        
                        <div className="input-group mb-3 formulario">            
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Estado" />
                        </div>                         
                        <div className="d-grid gap-2 d-md-block">
                            <button className="btn btn-success mx-2" type="button" data-bs-toggle="modal"  data-bs-target="#confirmProduct">Registrar</button>
                            <button className="btn btn-info mx-2" type="button"><NavLink to="/ListadoProductos" >Consultar</NavLink></button>
                        </div>
                    </div>
                </div>
                <div className="column-4">
                </div>
            </div>
        </div> 
        {/* <!-- Modal --> */}
        <div className="modal" id='confirmProduct' tabindex="-1">
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

        <div class="modal" id="registerProduct" tabindex="-1">
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

