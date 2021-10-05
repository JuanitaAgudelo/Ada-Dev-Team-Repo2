import React, { Fragment, useState, Route } from 'react';
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
                            <button className="btn btn-success" type="button" data-bs-toggle="modal"  data-bs-target="#confirmProduct">Registrar</button>
                            <button className="btn btn-info" type="button"><a href="./listadoProductos.html">Consultar</a></button>
                        </div>
                    </div>
                </div>
                <div className="column-4">
                </div>
            </div>
        </div> 
        {/* <!-- Modal --> */}
        <div class="modal" id='confirmProduct' tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Confirmar Registro Producto</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Id Producto" disabled/>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Nombre"/>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Descripción"/>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Valor Unitario"/>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Estado"/>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-primary"  data-bs-toggle="modal"  data-bs-target="#registerProduct">Registrar</button>
                    </div>
                </div>
            </div>
        </div>

      {/* <!-- Modal 2 --> */}

        <div class="modal" id="registerProduct" tabindex="-1">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Producto Registrado</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">                    
                    <p>Se ha registrado el producto con id: ..., <br/>
                        con nombre: ..., <br/>
                        con la siguiente descripción: ..., <br/>
                        y estado: ...</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>              
                </div>
            </div>
            </div>
        </div>      
            
        </Fragment>
    )
}

export default ProductosPage;

