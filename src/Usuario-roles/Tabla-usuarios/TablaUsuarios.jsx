import React from "react";
import Editar from "./img/edit-regular.svg";
function TablaUsuarios() {
    return (
        <div className="container">
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
                                <tr>
                                    <th scope="row">1</th>
                                    <td>correo@gmail.com</td>
                                    <td>Pendiente</td>
                                    <td>Pendiente</td>
                                    <td>
                                        <div className="btn-group d-flex justify-content-center" role="group">
                                            <button type="button" className="btn btn-warning btn-table" data-bs-toggle="modal"
                                                data-bs-target="#modalCRUD2"><img src={Editar} className="img-small-table"
                                                    alt="Busqueda" /></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>correo2@gmail.com</td>
                                    <td>Vendedor</td>
                                    <td>Autorizado</td>
                                    <td>
                                        <div className="btn-group d-flex justify-content-center" role="group">
                                            <button type="button" className="btn btn-warning btn-table" data-bs-toggle="modal"
                                                data-bs-target="#modalCRUD2"><img src={Editar} className="img-small-table"
                                                    alt="Busqueda" /></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>correo3@gmail.com</td>
                                    <td>Vendedor</td>
                                    <td>No Autorizado</td>
                                    <td>
                                        <div className="btn-group d-flex justify-content-center" role="group">
                                            <button type="button" className="btn btn-warning btn-table" data-bs-toggle="modal"
                                                data-bs-target="#modalCRUD2"><img src={Editar} className="img-small-table"
                                                    alt="Busqueda" /></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>correo4@gmail.com</td>
                                    <td>Administrador</td>
                                    <td>Autorizado</td>
                                    <td>
                                        <div className="btn-group d-flex justify-content-center" role="group">
                                            <button type="button" className="btn btn-warning btn-table" data-bs-toggle="modal"
                                                data-bs-target="#modalCRUD2"><img src={Editar} className="img-small-table"
                                                    alt="Busqueda" /></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>correo4@gmail.com</td>
                                    <td>Administrador</td>
                                    <td>Autorizado</td>
                                    <td>
                                        <div className="btn-group d-flex justify-content-center" role="group">
                                            <button type="button" className="btn btn-warning btn-table" data-bs-toggle="modal"
                                                data-bs-target="#modalCRUD2"><img src={Editar} className="img-small-table"
                                                    alt="Busqueda" /></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>correo@gmail.com</td>
                                    <td>Pendiente</td>
                                    <td>Pendiente</td>
                                    <td>
                                        <div className="btn-group d-flex justify-content-center" role="group">
                                            <button type="button" className="btn btn-warning btn-table" data-bs-toggle="modal"
                                                data-bs-target="#modalCRUD2"><img src={Editar} className="img-small-table"
                                                    alt="Busqueda" /></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>correo2@gmail.com</td>
                                    <td>Vendedor</td>
                                    <td>Autorizado</td>
                                    <td>
                                        <div className="btn-group d-flex justify-content-center" role="group">
                                            <button type="button" className="btn btn-warning btn-table" data-bs-toggle="modal"
                                                data-bs-target="#modalCRUD2"><img src={Editar} className="img-small-table"
                                                    alt="Busqueda" /></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>correo3@gmail.com</td>
                                    <td>Vendedor</td>
                                    <td>No Autorizado</td>
                                    <td>
                                        <div className="btn-group d-flex justify-content-center" role="group">
                                            <button type="button" className="btn btn-warning btn-table" data-bs-toggle="modal"
                                                data-bs-target="#modalCRUD2"><img src={Editar} className="img-small-table"
                                                    alt="Busqueda" /></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td>correo4@gmail.com</td>
                                    <td>Administrador</td>
                                    <td>Autorizado</td>
                                    <td>
                                        <div className="btn-group d-flex justify-content-center" role="group">
                                            <button type="button" className="btn btn-warning btn-table" data-bs-toggle="modal"
                                                data-bs-target="#modalCRUD2"><img src={Editar} className="img-small-table"
                                                    alt="Busqueda" /></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>correo4@gmail.com</td>
                                    <td>Administrador</td>
                                    <td>Autorizado</td>
                                    <td>
                                        <div className="btn-group d-flex justify-content-center" role="group">
                                            <button type="button" className="btn btn-warning btn-table" data-bs-toggle="modal"
                                                data-bs-target="#modalCRUD2"><img src={Editar} className="img-small-table"
                                                    alt="Busqueda" /></button>
                                        </div>
                                    </td>
                                </tr>
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
            <div class="modal fade" id="modalCRUD2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title fs-2" id="exampleModalLabel">Editar usuario</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form id="formEditar">
                            <div class="modal-body">
                                <div class ="form-group">
                                    <label for="ID" class ="col-form-label">ID: </label>
                                    <input type ="text" class ="form-control border-dark" id="ID" placeholder="Identificación" value=""/>
                                </div>
                                <div class ="form-group">
                                    <label for="Correo" class ="col-form-label">Correo: </label>
                                    <input type ="text" class ="form-control border-dark" id="Correo" placeholder="Correo" value=""/>
                                </div>
                                <div class ="form-group">
                                    <label for="Rol" class ="col-form-label">Rol: </label>
                                    <select class ="form-select border-dark" id="Rol">
                                    <option selected>Selecciona un rol...</option>
                                    <option value="1">Vendedor</option>
                                    <option value="2">Administrador</option>
                                    </select>
                                </div>
                                <div class ="form-group">
                                    <label for="Estado" class ="col-form-label">Estado: </label>
                                    <select class ="form-select border-dark" id="Estado">
                                    <option selected>Selecciona un Estado...</option>
                                    <option value="1">Autorizado</option>
                                    <option value="2">No autorizado</option>
                                    </select>
                                </div>
                            </div>
                            <div class ="modal-footer">
                                <button type ="button" class ="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                <button type ="submit" id="btnEditar" class ="btn btn-primary">Actualizar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default TablaUsuarios;