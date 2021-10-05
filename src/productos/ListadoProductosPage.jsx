import React, { Fragment, useState } from 'react';
import './productosStyles.css';
import HeaderComponent from '../shared/components/header/HeaderComponent';
import FooterComponent from '../shared/components/footer/FooterComponent';

function ListadoProductosPage(){
    return(
        <Fragment>
        <div className="title">
            <h1>Listado Productos</h1>
        </div> 
        <div className="container">
            <div className="row">
                <div className="column-4">                  
                </div>
                <div className="column-4"> 
                    <div className="formVendedores">                   
                        <div className=" column-4 input-group mb-3 formulario">            
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Id Producto"/>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Nombre"/>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Descripcion"/>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Estado"/>
                            <div className="d-grid gap-2 d-md-block">                        
                                <button className="btn btn-info" type="button">Filtrar</button>
                            </div>
                        </div>
                    </div>                       
                </div>                                                      
                <div className="column-4">                    
                </div>
            </div>
        </div>

        {/* <!-- Table Productos --> */}
        <div class="container">
            <div class="row-12">
                <div class="column-4">                    
                </div>
                <div class="column-4"> 
                    <table class="table table-striped">       
                    <thead>
                        <tr>
                        <th scope="col">idProducto</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Valor Unitario</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>               
                        <td>1</td>
                        <td>Producto A</td>
                        <td>Producto para ... cuyos ingredientes ...</td>
                        <td>1500</td>
                        <td>Disponible</td>
                        <td>
                            <button class="btn btn-warning" data-bs-toggle="modal"  data-bs-target="#editProduct">
                                <i class="far fa-edit"></i>
                            </button>
                        </td>                
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Producto B</td>
                            <td>Producto para ... cuyos ingredientes ...</td>
                            <td>2500</td>
                            <td>Disponible</td>
                        <td>
                            <button class="btn btn-warning" data-bs-toggle="modal"  data-bs-target="#editProduct">
                                <i class="far fa-edit"></i>
                            </button>
                        </td>                   
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Producto C</td>
                            <td>Producto para ... cuyos ingredientes ...</td>
                            <td>5500</td>
                            <td>No Disponible</td>

                            <td>
                                <button class="btn btn-warning" data-bs-toggle="modal"  data-bs-target="#editProduct">
                                    <i class="far fa-edit"></i>
                                </button>
                            </td> 
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Producto D</td>
                            <td>Producto para ... cuyos ingredientes ...</td>
                            <td>800</td>
                            <td>Disponible</td>
                            <td>
                                <button class="btn btn-warning" data-bs-toggle="modal"  data-bs-target="#editProduct">
                                    <i class="far fa-edit"></i>
                                </button>                                
                            </td> 
                        </tr>
                    </tbody>          
                    </table>
                </div>
                <div class="column-4">                    
                </div>
            </div>
        </div> 
        
    {/* </div> */}

        {/* <!-- Modal --> */}
        <div className="modal" id='editProduct' tabindex="-1">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Editar Producto</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <div>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Id Producto" disabled/>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Nombre"/>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Descripción"/>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Valor Unitario"/>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Estado"/>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"  data-bs-target="#confirmEditProduct">Editar</button>
                </div>
            </div>
            </div>
        </div>

       {/* <!-- Modal 2 --> */}

        <div className="modal" id="confirmEditProduct" tabindex="-1">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Producto Editado</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                        <p>Se ha Editado el producto con id: ..., <br/>
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

export default ListadoProductosPage;