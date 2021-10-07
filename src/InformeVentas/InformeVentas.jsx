import React, { Fragment } from "react";
import './InformeVentasStyles.css';
import busqueda from "./img/search-solid.svg";
import editar from "./img/edit-regular.svg";
import eliminar from "./img/delete.png";
import realizado from "./img/realizado.png"

function InformeVentas() {
    return (
        <Fragment>
            <div class="container">
                <div class="mt-5"></div>
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-12">
                        <h2><span class="icon-text-document"></span>Informe de ventas</h2>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="mt-4"></div>
                <div class="row">
                    <div class="col-sm-6 col-md-6 col-lg-6">

                        <div class="dropdown show">
                            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filtrar
                            </a>

                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" href="#">Vendedor</a>
                                <a class="dropdown-item" href="#">Fecha</a>
                                <a class="dropdown-item" href="#">Producto</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-md-6 col-lg-6">
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Buscar en ventas" aria-label="Search" />
                            <button id="Buscar" class="btn btn-success" type="submit"><img src={busqueda} class="img-small" alt="Busqueda" /></button>
                        </form>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="mt-3"></div>
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-12">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Precio de venta</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio Unitario</th>
                                    <th scope="col">Fecha Venta</th>
                                    <th scope="col">Nombre Cliente</th>
                                    <th scope="col">Documento Cliente</th>
                                    <th scope="col">Vendedor </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Galletas</td>
                                    <td>10000</td>
                                    <td>15000</td>
                                    <td>5</td>
                                    <td>10/6/20</td>
                                    <td>Juan</td>
                                    <td>123456654</td>
                                    <td>Pedro</td>

                                    <td><button type="button" class="btn btn-warning btn-table" data-bs-toggle="modal"
                                        data-bs-target="#modal1"><img src={editar} class="img-small-table" alt="Busqueda" /></button>
                                    </td>
                                    <td><button type="button" class="btn btn-warning2 btn-table2" data-bs-toggle="modal"
                                        data-bs-target="#modal3"><img src={eliminar} class="img-small-table" alt="Busqueda" /></button>
                                    </td>

                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Chocolate</td>
                                    <td>400</td>
                                    <td>500</td>
                                    <td>30</td>
                                    <td>20/7/99</td>
                                    <td>Juan</td>
                                    <td>123456654</td>
                                    <td>Pedro</td>
                                    <td><button type="button" class="btn btn-warning btn-table" data-bs-toggle="modal"
                                        data-bs-target="#modal1"><img src={editar} class="img-small-table" alt="Busqueda" /></button>
                                    </td>
                                    <td><button type="button" class="btn btn-warning2 btn-table2" data-bs-toggle="modal"
                                        data-bs-target="#modal3"><img src={eliminar} class="img-small-table" alt="Busqueda" /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>leche</td>
                                    <td>140000</td>
                                    <td>16000</td>
                                    <td>30</td>
                                    <td>20/7/99</td>
                                    <td>Juan</td>
                                    <td>123456654</td>
                                    <td>Pedro</td>
                                    <td><button type="button" class="btn btn-warning btn-table" data-bs-toggle="modal"
                                        data-bs-target="#modal1"><img src={editar} class="img-small-table" alt="Busqueda" /></button>
                                    </td>
                                    <td><button type="button" class="btn btn-warning2 btn-table2" data-bs-toggle="modal"
                                        data-bs-target="#modal3"><img src={eliminar} class="img-small-table" alt="Busqueda" /></button>
                                    </td>

                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Yogurt</td>
                                    <td>800</td>
                                    <td>1200</td>
                                    <td>30</td>
                                    <td>20/7/99</td>
                                    <td>Juan</td>
                                    <td>123456654</td>
                                    <td>Pedro</td>
                                    <td><button type="button" class="btn btn-warning btn-table" data-bs-toggle="modal"
                                        data-bs-target="#modal1"><img src={editar} class="img-small-table" alt="Busqueda" /></button>
                                    </td>
                                    <td><button type="button" class="btn btn-warning2 btn-table2" data-bs-toggle="modal"
                                        data-bs-target="#modal3"><img src={eliminar} class="img-small-table" alt="Busqueda" /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Chocolate</td>
                                    <td>400</td>
                                    <td>500</td>
                                    <td>30</td>
                                    <td>20/9/08</td>
                                    <td>Juan</td>
                                    <td>123456654</td>
                                    <td>Pedro</td>
                                    <td><button type="button" class="btn btn-warning btn-table" data-bs-toggle="modal"
                                        data-bs-target="#modal1"><img src={editar} class="img-small-table" alt="Busqueda" /></button>
                                    </td>
                                    <td><button type="button" class="btn btn-warning2 btn-table2" data-bs-toggle="modal"
                                        data-bs-target="#modal3"><img src={eliminar} class="img-small-table" alt="Busqueda" /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>Galletas</td>
                                    <td>10000</td>
                                    <td>15000</td>
                                    <td>5</td>
                                    <td>10/6/20</td>
                                    <td>Juan</td>
                                    <td>123456654</td>
                                    <td>Pedro</td>
                                    <td><button type="button" class="btn btn-warning btn-table" data-bs-toggle="modal"
                                        data-bs-target="#modal1"><img src={editar} class="img-small-table" alt="editar" /></button>
                                    </td>
                                    <td><button type="button" class="btn btn-warning2 btn-table2" data-bs-toggle="modal"
                                        data-bs-target="#modal3"><img src={eliminar} class="img-small-table" alt="Busqueda" /></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-6 col-lg-6">
                        <p>Páginas 1 de 4</p>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-6">
                        <div class="wrapper">
                            <div class="prev"><span class="icon-chevron-left"></span> </div>
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                            </ul>
                            <div class="next"><span class="icon-chevron-right"></span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="modal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content ">
                        <div class="modal-header ">
                            <h5 class="modal-title" id="exampleModalLabel">Editar venta</h5>
                            <button type="button" class="btn-close borde" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-2">
                                    <label for="recipient-name" class="col-form-label">Producto:</label>
                                    <input type="text" class="form-control" id="recipient-name" />
                                </div>
                                <div class="mb-2">
                                    <label for="recipient-name" class="col-form-label">Cantidad:</label>
                                    <input type="text" class="form-control" id="recipient-name" />
                                </div>
                                <div class="mb-2">
                                    <label for="recipient-name" class="col-form-label">Precio Unitario:</label>
                                    <input type="text" class="form-control" id="recipient-name" />
                                </div>
                                <div class="mb-2">
                                    <label for="recipient-name" class="col-form-label">Fecha:</label>
                                    <input type="text" class="form-control" id="recipient-name" />
                                </div>
                                <div class="mb-2">
                                    <label for="recipient-name" class="col-form-label">Nombre Cliente:</label>
                                    <input type="text" class="form-control" id="recipient-name" />
                                </div>
                                <div class="mb-2">
                                    <label for="recipient-name" class="col-form-label">Documento Cliente:</label>
                                    <input type="text" class="form-control" id="recipient-name" />
                                </div>
                                <div class="mb-2">
                                    <label for="recipient-name" class="col-form-label">Vendedor:</label>
                                    <input type="text" class="form-control" id="recipient-name" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Limpiar</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal2">Actualizar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" tabindex="-1" id="modal2">
                <div class="modal-dialog modal-sm modal-dialog-centered ">
                    <div class="modal-content borde">
                        <div class="modal-body">
                            <img src={realizado} width="50px"/>
                            Se actualizó correctamente </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" tabindex="-1" id="modal3">
                <div class="modal-dialog  modal-dialog-centered ">
                    <div class="modal-content borde">
                        <div class="modal-body">
                            ¿Esta seguro que desea eliminar este campo?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary" >Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>

            <br></br>
            <br></br>
        </Fragment>
    )
}

export default InformeVentas;