import React, { Component, useState, useEffect } from "react";
import Editar from "./img/edit-regular.svg";
import Buscar from "./img/search-solid.svg";
import eliminar from "./img/delete.png";
import Axios from "axios";
import apiBaseUrl from "../shared/Utils/Api";
import ReactPaginate from 'react-paginate';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Eliminar from "./img/trash-alt-regular.svg";

import './InformeVentasStyles.css';
import { findAllByDisplayValue } from "@testing-library/dom";
class InformeVentas extends Component {
    state = {
        ventas: [],
        tablaventas: [],
        perPage: 4,
        page: 0,
        pages: 0,
        modalEditar: false,
        modalEliminar: false,
        busqueda:"",
        venta: {
            id: null,
            precioUnitario: 0,
            cantidad: 0, 
            valorTotal: 0,
            fecha: '', 
            nombreCliente: '',
            documentoCliente: 0,
            vendedor: '',
            Usuarios_id: 0,
            Productos_id: 0
        }
    }

    peticionGet = () => {
        Axios.get(`${apiBaseUrl}/get-venta`).then(response => {
            const {perPage}=this.state;
            this.setState({
                ventas: response.data,
                tablaventas: response.data,
            });
            this.setState({
                pages: Math.ceil(this.state.ventas.length / perPage)
            })
        });
    }
    peticionPut = (id, ventas) => {
        Axios.put(`${apiBaseUrl}/update-venta/` + id, ventas).then(response => {
            this.modalEditar();
            this.peticionGet();
        })
    }
    peticionDelete = (id) => {
        Axios.delete( `${apiBaseUrl}/delete-venta/` + id).then(response => {
            this.setState({ modalEliminar: false });
            this.peticionGet();
        })
    }

    modalEditar = () => {
        this.setState({ modalEditar: !this.state.modalEditar });
    }
    seleccionarVenta = (ventaactual) => {
        this.setState({
            venta: {
                id: ventaactual.id,
                precioUnitario: ventaactual.precioUnitario,
                cantidad: ventaactual.cantidad, 
                valorTotal: ventaactual.valorTotal,
                fecha: ventaactual.fecha,
                nombreCliente: ventaactual.nombreCliente,
                documentoCliente: ventaactual.documentoCliente,
                vendedor: ventaactual.vendedor,
                Usuarios_id: ventaactual.Usuarios_id,
                Productos_id: ventaactual.Productos_id

            }
        })

    }
  
   
    handleChange = async e => {
        e.persist();
        await this.setState({
            venta: {
                ...this.state.venta,
                [e.target.name]: e.target.value
            }
        });
    }
    handlefilterChange=e=>{
        this.setState({
            busqueda: e.target.value
        });
        this.filtrar(e.target.value);
    }
    filtrar=(terminoBusqueda)=>{
        let resultadoBusqueda=this.state.tablaventas.filter((elemento)=>{
            if(elemento.id.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.precioUnitario.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.cantidad.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.valorTotal.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.fecha.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.nombreCliente.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.documentoCliente.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.vendedor.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento;
            }
        });
        this.setState({
            ventas: resultadoBusqueda
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
        const { page, perPage, pages, ventas } = this.state;

        return (
            
            <div className="container">
                
                <div className="title">
                <h1>Informe Ventas</h1>
                </div>
                <div class="container-fluid">
                    <div class="mt-5"></div>

                    <div class="row">
                        <div class="col">
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Buscar usuario" aria-label="Search" value={this.state.busqueda} onChange={this.handlefilterChange}/>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="mt-5"></div>
                    <div className="col-lg-12">
                        <div className="table-responsive">
                            <table id="TableUser" className="table table-hover table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Precio unitario</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Valor total</th>
                                        <th scope="col">Fecha Venta</th>
                                        <th scope="col">Nombre Cliente</th>
                                        <th scope="col">Documento Cliente</th>
                                        <th scope="col">Vendedor </th>
                                        <th scope="col">Usuario ID </th>
                                        <th scope="col">Producto ID </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ventas.slice(page*perPage, (page+1)*perPage).map((val) => {
                                        return (
                                            <tr key={val.id}>
                                                <th scope="row">{val.id}</th>
                                                <td>{val.precioUnitario}</td>
                                                <td>{val.cantidad}</td>
                                                <td>{val.valorTotal}</td>
                                                <td>{val.fecha.split("T")[0]}</td>
                                                <td>{val.nombreCliente}</td>
                                                <td>{val.documentoCliente}</td>
                                                <td>{val.vendedor}</td>
                                                <td>{val.Usuarios_id}</td>
                                                <td>{val.Productos_id}</td>
                                                <td>
                                                    <div className="btn-group d-flex justify-content-center" role="group">
                                                        <button type="button" className="btn btn-warning btn-table3" data-bs-toggle="modal"
                                                            data-bs-target="#modalCRU" onClick={() => { this.seleccionarVenta(val); this.modalEditar() }}><img src={Editar} className="img-small-table"
                                                                alt="Busqueda" /></button>
                                                    
                                                        <button type="button" className="btn btn-danger btn-table3" data-bs-toggle="modal"
                                                        onClick={()=>{this.seleccionarVenta(val); this.setState({modalEliminar: true})}}><img src={Eliminar} className="img-small-table"
                                                            alt="Busqueda" /></button>
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
                        <h5 className="modal-title fs-2" id="exampleModalLabel">Editar usuario</h5>
                    </div>
                    <ModalBody>
                        <form id="formEditar">
                            <div className="modal-body">
                                <div className="form-group">
                                    <label for="ID" className="col-form-label">ID: </label>
                                    <input type="text" className="form-control border-dark" name="id" id="id" value={this.state.venta.id} readOnly />
                                </div>
                                <div className="form-group">
                                    <label for="precioUnitario" className="col-form-label">Precio: </label>
                                    <input type="number" className="form-control border-dark" name="precioUnitario" id="precioUnitario" value={this.state.venta.precioUnitario} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label for="cantidad" className="col-form-label">Cantidad: </label>
                                    <input type="number" className="form-control border-dark" name="cantidad" id="cantidad" value={this.state.venta.cantidad} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label for="valorTotal" className="col-form-label">Valor Total: </label>
                                    <input type="number" className="form-control border-dark" name="valorTotal" id="valorTotal" value={this.state.venta.valorTotal} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label for="fecha" className="col-form-label">Fecha Venta: </label>
                                    <input type="date" className="form-control border-dark" name="fecha" id="fecha" value={this.state.venta.fecha} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label for="nombreCliente" className="col-form-label">Nombre Cliente: </label>
                                    <input type="text" className="form-control border-dark" name="nombreCliente" id="nombreCliente" value={this.state.venta.nombreCliente} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label for="documentoCliente" className="col-form-label">Documento Cliente: </label>
                                    <input type="number" className="form-control border-dark" name="documentoCliente" id="documentoCliente" value={this.state.venta.documentoCliente} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label for="vendedor" className="col-form-label">Vendedor: </label>
                                    <input type="text" className="form-control border-dark" name="vendedor" id="vendedor" value={this.state.venta.vendedor} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label for="Usuarios_id" className="col-form-label">Usuario ID: </label>
                                    <input type="number" className="form-control border-dark" name="Usuarios_id" id="Usuarios_id" value={this.state.venta.Usuarios_id} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label for="Productos_id" className="col-form-label">Productos ID </label>
                                    <input type="text" className="form-control border-dark" name="Productos_id" id="Productos_id" value={this.state.venta.Productos_id} onChange={this.handleChange} />
                                </div>
                                
                                
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => this.modalEditar()}>Cancelar</button>
                                <button type="button" id="btnEditar" className="btn btn-primary" onClick={() => this.peticionPut(this.state.venta.id, this.state.venta)}>Actualizar</button>
                            </div>
                        </form>
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.modalEliminar}>
                    <ModalBody>
                        Estás seguro que deseas eliminar la venta {this.state.venta.id && this.state.venta.nombreCliente}
                    </ModalBody>
                    <ModalFooter>
                        <button type="button" className="btn btn-danger" onClick={() => this.peticionDelete(this.state.venta.id)}>Sí</button>
                        <button type="button" className="btn btn-secondary" onClick={() => this.setState({ modalEliminar: false })}>No</button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
};
export default InformeVentas;