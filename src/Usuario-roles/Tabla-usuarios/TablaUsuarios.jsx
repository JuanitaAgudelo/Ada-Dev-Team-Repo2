import React, { Component, useState, useEffect } from "react";
import Editar from "./img/edit-regular.svg";
import Buscar from "./img/search-solid.svg";
import Eliminar from "./img/trash-alt-regular.svg"
import Axios from "axios";
import apiBaseUrl from "../../shared/Utils/Api";
import ReactPaginate from 'react-paginate';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import './TablaUsuariosStyle.css';
class TablaUsuarios extends Component {
    state = {
        usuarios: [],
        tablausuarios: [],
        perPage: 10,
        page: 0,
        pages: 0,
        modalEditar: false,
        modalEliminar: false,
        busqueda: "",
        usuario: {
            id: null,
            correo: '',
            rol: '',
            estado: ''
        }
    }

    peticionGet = () => {
        Axios.get(`${apiBaseUrl}/get-usuario`).then(response => {
            const { perPage } = this.state;
            this.setState({
                usuarios: response.data,
                tablausuarios: response.data,
            });
            this.setState({
                pages: Math.ceil(this.state.usuarios.length / perPage)
            })
        });
    }
    peticionGetusuario = () => {
        Axios.get(`${apiBaseUrl}/get-informacion-usuario/` + this.state.usuario.id).then(response => {
            this.setState({
                usuarios: response.data
            });
        });
    }
    peticionPut = (id, usuario) => {
        Axios.put(`${apiBaseUrl}/update-usuario/` + id, usuario).then(response => {
            this.modalEditar();
            this.peticionGet();
        })
    }
    peticionDelete = (id) => {
        Axios.delete( `${apiBaseUrl}/delete-usuario/` + id).then(response => {
            this.setState({ modalEliminar: false });
            this.peticionGet();
        })
    }
    modalEditar = () => {
        this.setState({ modalEditar: !this.state.modalEditar });
    }
    seleccionarUsuario = (usuarioactual) => {
        this.setState({
            usuario: {
                id: usuarioactual.id,
                correo: usuarioactual.correo,
                rol: usuarioactual.rol,
                estado: usuarioactual.estado
            }
        })
        console.log(this.state.usuario.rol);
    }
    handleChange = async e => {
        e.persist();
        await this.setState({
            usuario: {
                ...this.state.usuario,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.usuario);
    }
    handlefilterChange = e => {
        this.setState({
            busqueda: e.target.value
        });
        this.filtrar(e.target.value);
    }
    filtrar = (terminoBusqueda) => {
        let resultadoBusqueda = this.state.tablausuarios.filter((elemento) => {
            if (elemento.id.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.correo.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.rol.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.estado.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                return elemento;
            }
        });
        this.setState({
            usuarios: resultadoBusqueda
        });
    }
    handlePageClick = (e) => {
        let page = e.selected;
        this.setState({ page })
    }
    componentDidMount() {
        this.peticionGet();
    }
    render() {
        const { page, perPage, pages, usuarios } = this.state;
        return (

            <div className="container">
                 <div className="title">
                <h1>Usuarios y Roles</h1>
                </div>
                <div class="container-fluid">
                    <div class="mt-5"></div>

                    <div class="row">
                        <div class="col">
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Buscar usuario" aria-label="Search" value={this.state.busqueda} onChange={this.handlefilterChange} />
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
                                        <th scope="col">ID</th>
                                        <th scope="col">Correo</th>
                                        <th scope="col">Rol</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usuarios.slice(page * perPage, (page + 1) * perPage).map((usuario) => {
                                        return (
                                            <tr key={usuario.id}>
                                                <th scope="row">{usuario.id}</th>
                                                <td>{usuario.correo}</td>
                                                <td>{usuario.rol}</td>
                                                <td>{usuario.estado}</td>
                                                <td>
                                                    <div className="btn-group d-flex justify-content-center" role="group">
                                                        <button type="button" className="btn btn-warning btn-table" data-bs-toggle="modal"
                                                            data-bs-target="#modalCRU" onClick={() => { this.seleccionarUsuario(usuario); this.modalEditar() }}><img src={Editar} className="img-small-table"
                                                                alt="Busqueda" /></button>
                                                        <button type="button" className="btn btn-danger btn-table" data-bs-toggle="modal"
                                                        onClick={()=>{this.seleccionarUsuario(usuario); this.setState({modalEliminar: true})}}><img src={Eliminar} className="img-small-table"
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
                    <div className="col-sm-12">
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
                                    <input type="text" className="form-control border-dark" name="id" id="id" value={this.state.usuario.id} readOnly />
                                </div>
                                <div className="form-group">
                                    <label for="Correo" className="col-form-label">Correo: </label>
                                    <input type="text" className="form-control border-dark" name="correo" id="correo" value={this.state.usuario.correo} readOnly />
                                </div>
                                <div className="form-group">
                                    <label for="Rol" className="col-form-label">Rol: </label>
                                    <select className="form-select border-dark" name="rol" id="rol" value={this.state.usuario.rol} onChange={this.handleChange}>
                                        <option selected>Selecciona un rol...</option>
                                        <option name="rol" value="Vendedor">Vendedor</option>
                                        <option name="rol" value="Administrador">Administrador</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="Estado" className="col-form-label">Estado: </label>
                                    <select className="form-select border-dark" name="estado" id="estado" value={this.state.usuario.estado} onChange={this.handleChange}>
                                        <option selected>Selecciona un Estado...</option>
                                        <option name="estado" value="Autorizado">Autorizado</option>
                                        <option name="estado" value="No Autorizado">No autorizado</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => this.modalEditar()}>Cancelar</button>
                                <button type="button" id="btnEditar" className="btn btn-primary" onClick={() => this.peticionPut(this.state.usuario.id, this.state.usuario)}>Actualizar</button>
                            </div>
                        </form>
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.modalEliminar}>
                    <ModalBody>
                        Estás seguro que deseas eliminar al usuario {this.state.usuario && this.state.usuario.correo}
                    </ModalBody>
                    <ModalFooter>
                        <button type="button" className="btn btn-danger" onClick={() => this.peticionDelete(this.state.usuario.id)}>Sí</button>
                        <button type="button" className="btn btn-secondary" onClick={() => this.setState({ modalEliminar: false })}>No</button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
};
export default TablaUsuarios;