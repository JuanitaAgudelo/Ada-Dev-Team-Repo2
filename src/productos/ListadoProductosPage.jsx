import React, { Component, useState, useEffect } from "react";
import Editar from "./img/edit-regular.svg";
import Eliminar from "./img/trash-alt-regular.svg";
//import Buscar from "./img/search-solid.svg";
import Axios from "axios";
import ReactPaginate from "react-paginate";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import './ListadoProductosStyle.css';
import apiBaseUrl from "../shared/Utils/Api";

class ListadoProductos extends Component {
    state = {
        
        productos: [],
        tablaProductos: [],
        perPage: 5,
        page: 0,
        pages: 0,
        modalEditar: false,
        modalEliminar: false,
        busqueda:"",
        producto: {
            id: 0,
            nombre: " ",
            descripcion: " ",
            valorUnitario: 0,
            estado: " "
        }      
    }

    

    peticionGet = () => {
        Axios.get(`http://localhost:3001/get-products`).then(response => {
            const {perPage}=this.state;
            this.setState({
                productos: response.data,
                tablaProductos: response.data,
            });
            this.setState({
                pages: Math.ceil(this.state.productos.length / perPage)
            })
        });
    }

    peticionPut = (id, producto) => {
        Axios.put(`http://localhost:3001/update-product/` + id, producto).then(response => {
            this.modalEditar();
            this.peticionGet();
        })
    }

    peticionDelete = (id) =>{        
            Axios.delete(`http://localhost:3001/delete-product/` +id).then(response => { 
            this.modalEliminar();           
            this.peticionGet();
        })
    }
    modalEditar = () => {
        this.setState({ modalEditar: !this.state.modalEditar });
    }
    modalEliminar = () => {
        this.setState({ modalEliminar: !this.state.modalEliminar });
    }

    
    seleccionarProducto = (productoActual) => {
        this.setState({
            producto: {
                id: productoActual.id,
                nombre: productoActual.nombre,
                descripcion: productoActual.descripcion,
                valorUnitario: productoActual.valorUnitario,
                estado: productoActual.estado
            }
        })
        //console.log(this.state.usuario.rol);
    }
    handleChange = async e => {
        e.persist();
        await this.setState({
            producto: {
                ...this.state.producto,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.producto);
    }
    handlefilterChange=e=>{
        this.setState({
            busqueda: e.target.value
        });
        this.filtrar(e.target.value);
    }
    filtrar=(terminoBusqueda)=>{
        let resultadoBusqueda=this.state.tablaProductos.filter((elemento)=>{
            if(elemento.id.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.descripcion.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.estado.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento;
            }
        });
        this.setState({
            tablaProductos: resultadoBusqueda
        });
    }
    handlePageClick = (e) => {
        let page = e.selected;
        this.setState({page})
    }
    componentDidMount() {
        this.peticionGet();
    }
    render() {        
        const { page, perPage, pages, tablaProductos } = this.state;
        return (
            <div className="container">
                <div className="title">
                <h1>Listado Productos</h1>
                </div>
                <div class="container-fluid">
                    <div class="mt-5"></div>

                    <div class="row">
                        <div class="col">
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Buscar producto" aria-label="Search" value={this.state.busqueda} onChange={this.handlefilterChange}/>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="mt-5"></div>
                    <div className="col-lg-12">
                        <div className="table-responsive">
                            <table id="TableProduct" className="table table-hover table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Valor Unitario</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tablaProductos.slice(page*perPage, (page+1)*perPage).map((producto) => {
                                        return (
                                            <tr key={producto.id}>
                                            <th scope="row">{producto.id}</th>
                                                <td>{producto.nombre}</td>
                                                <td>{producto.descripcion}</td>
                                                <td>{producto.valorUnitario}</td>
                                                <td>{producto.estado}</td>
                                                <td>
                                                    <div className="btn-group d-flex justify-content-center" role="group">
                                                        <button type="button" className="btn btn-warning btn-table" data-bs-toggle="modal"
                                                            data-bs-target="#modalCRU" onClick={() => { this.seleccionarProducto(producto); this.modalEditar() }}><img src={Editar} className="img-small-table"
                                                                alt="Busqueda" /></button>
                                                        <button onClick={() => {this.seleccionarProducto(producto); this.modalEliminar()}} className="btn btn-danger mx-2 py-1 btn-table"><img src={Eliminar} className="img-small-table"></img></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <ReactPaginate
                        previousLabel={'<-'} 
                        nextLabel={'->'} 
                        pageCount={pages}
                        onPageChange={this.handlePageClick} 
                        containerClassName={'pagination'}
                        activeClassName={'activePagination'}
                        />
                    </div>
                </div>
                <Modal isOpen={this.state.modalEditar}>
                    <div className="modal-header">
                        <h5 className="modal-title fs-2" id="exampleModalLabel">Editar producto</h5>
                    </div>
                    <ModalBody>
                        <form id="formEditar">
                            <div className="modal-body">
                                <div className="form-group">
                                    <label for="ID" className="col-form-label">ID: </label>
                                    <input type="text" className="form-control border-dark" name="id" id="id" value={this.state.producto.id} readOnly />
                                </div>
                                <div className="form-group">
                                    <label for="nombre" className="col-form-label">Nombre: </label>
                                    <input type="text" className="form-control border-dark" name="nombre" id="nombre" value={this.state.producto.nombre} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label for="descripcion" className="col-form-label">Descripción: </label>
                                    <input type="text" className="form-control border-dark" name="descripcion" id="descripcion" value={this.state.producto.descripcion} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label for="valorUnitario" className="col-form-label">Valor Unitario: </label>
                                    <input type="number" className="form-control border-dark" name="valorUnitario" id="valorUnitario" value={this.state.producto.valorUnitario} onChange={this.handleChange} />
                                </div>                                
                                <div className="form-group">
                                    <label for="Estado" className="col-form-label">Estado: </label>
                                    <select className="form-select border-dark" name="estado" id="estado" value={this.state.producto.estado} onChange={this.handleChange}>
                                        <option selected>Selecciona un Estado...</option>
                                        <option name="estado" value="Disponible">Disponible</option>
                                        <option name="estado" value="No Disponible">No Disponible</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => this.modalEditar()}>Cancelar</button>
                                <button type="button" id="btnEditar" className="btn btn-primary" onClick={() => this.peticionPut(this.state.producto.id, this.state.producto)}>Actualizar</button>
                            </div>
                        </form>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.modalEliminar}>
                    <div className="modal-header">
                        <h5 className="modal-title fs-2" id="exampleModalLabel">Eliminar producto</h5>                                               
                    </div>
                    <ModalBody>
                        <form id="formElimar">
                            <div className="modal-body">
                                <div><h6>¿Desea eliminar este producto?</h6></div>  
                                <div className="form-group">
                                    <label for="ID" className="col-form-label">ID: </label>
                                    <input type="text" className="form-control border-dark" name="id" id="id" value={this.state.producto.id} readOnly />
                                </div>
                                <div className="form-group">
                                    <label for="nombre" className="col-form-label">Nombre: </label>
                                    <input type="text" className="form-control border-dark" name="nombre" id="nombre" value={this.state.producto.nombre} readOnly />
                                </div>
                                <div className="form-group">
                                    <label for="descripcion" className="col-form-label">Descripción: </label>
                                    <input type="text" className="form-control border-dark" name="descripcion" id="descripcion" value={this.state.producto.descripcion} readOnly />
                                </div>
                                <div className="form-group">
                                    <label for="valorUnitario" className="col-form-label">Valor Unitario: </label>
                                    <input type="number" className="form-control border-dark" name="valorUnitario" id="valorUnitario" value={this.state.producto.valorUnitario} readOnly />
                                </div> 
                                <div className="form-group">
                                    <label for="estado" className="col-form-label">Estado: </label>
                                    <input type="text" className="form-control border-dark" name="estado" id="estado" value={this.state.producto.estado} readOnly />
                                </div>                           
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => this.modalEliminar()}>Cancelar</button> 
                                <button type="button" id="btnEliminar" className="btn btn-primary" onClick={() => this.peticionDelete(this.state.producto.id)}>Eliminar</button>
                            </div>
                        </form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
};
export default ListadoProductos;