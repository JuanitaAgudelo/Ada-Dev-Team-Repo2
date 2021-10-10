import React, { Component, useState, useEffect } from "react";
import Editar from "./img/edit-regular.svg";
import Buscar from "./img/search-solid.svg";
import Axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
class TablaUsuarios extends Component {
    state = {
        usuarios: [],
        tablausuarios: [],
        modalEditar: false,
        busqueda:"",
        usuario: {
            id: null,
            correo: '',
            rol: '',
            estado: ''
        }
    }

    peticionGet = () => {
        Axios.get('http://localhost:3001/Usuarios').then(response => {
            this.setState({
                usuarios: response.data
            });
            this.setState({
                tablausuarios: response.data
            });
        });
    }
    peticionGetusuario = () => {
        Axios.get('http://localhost:3001/Informacion-usuario/' + this.state.usuario.id).then(response => {
            this.setState({
                usuarios: response.data
            });
        });
    }
    peticionPut = (id, usuario) => {
        Axios.put('http://localhost:3001/Actualizar-usuario/' + id, usuario).then(response => {
            this.modalEditar();
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
    handlefilterChange=e=>{
        this.setState({
            busqueda: e.target.value
        });
        this.filtrar(e.target.value);
    }
    filtrar=(terminoBusqueda)=>{
        let resultadoBusqueda=this.state.tablausuarios.filter((elemento)=>{
            if(elemento.id.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.correo.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.rol.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.estado.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento;
            }
        });
        this.setState({
            usuarios: resultadoBusqueda
        });
    }
    componentDidMount() {
        this.peticionGet();
    }
    render() {
        const { usuarios } = this.state;
        return (
            <div className="container">
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
                                        <th scope="col">ID</th>
                                        <th scope="col">Correo</th>
                                        <th scope="col">Rol</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usuarios.map((usuario) => {
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
                    <div className="col-sm-12 col-md-5">
                        <div className="dataTables_info" role="status" aria-live="polite">
                            Registros 1 a 10 de 20</div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                        <div className="dataTables_paginate paging_simple_numbers d-flex justify-content-end">
                            <ul className="pagination">
                                <li className="paginate_button page-item previous disabled" id="btn-Anterior">
                                    <a href="#" aria-controls="TableUser" data-dt-idx="0" tabindex="0" className="page-link">Anterior</a>
                                </li>
                                <li className="paginate_button page-item active">
                                    <a href="#" aria-controls="TableUser" data-dt-idx="1" tabindex="0" className="page-link">1</a>
                                </li>
                                <li className="paginate_button page-item ">
                                    <a href="#" aria-controls="TableUser" data-dt-idx="2" tabindex="0" className="page-link">2</a>
                                </li>
                                <li className="paginate_button page-item next" id="btn-Siguiente">
                                    <a href="#" aria-controls="TableUser" data-dt-idx="3" tabindex="0" className="page-link">Siguiente</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.modalEditar}>
                    <ModalHeader className="modal-header">
                        <h5 className="modal-title fs-2" id="exampleModalLabel">Editar usuario</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" onClick={() => this.modalEditar()}>x</span>
                        </button>
                    </ModalHeader>
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
                            <ModalFooter>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => this.modalEditar()}>Cancelar</button>
                                    <button type="button" id="btnEditar" className="btn btn-primary" onClick={() => this.peticionPut(this.state.usuario.id, this.state.usuario)}>Actualizar</button>
                                </div>
                            </ModalFooter>
                        </form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
};

export default TablaUsuarios;