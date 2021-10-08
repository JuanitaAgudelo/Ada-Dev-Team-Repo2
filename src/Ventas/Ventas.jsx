import React, { Fragment } from "react";
import cheque from "./img/cheque.png";
import "./VentasStyles.css";

function Ventas() {
    return (
        <Fragment>
            <div class="title">
                <h1>Registro de Ventas</h1>
            </div>
            <div class="container">
                <div class="row">
                    <div class="column-4">
                    </div>
                    <div class="column-4">
                        <div class="formVentas">
                            <div class="input-group mb-3 formulario">
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Id Venta"/>
                            </div>
                            <div class="input-group mb-3 formulario">
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Valor Unitario"/>
                            </div>
                            <div class="input-group mb-3 formulario">
                                <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Cantidad"/>
                            </div>
                            <div class="input-group mb-3 formulario">
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Valor Total"/>
                            </div>
                            <div class="input-group mb-3 formulario">
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Nombre Cliente"/>
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Id Cliente"/>
                            </div>
                            <div class="input-group mb-3 formulario">
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Nombre Vendedor"/>
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Id Vendedor"/>
                            </div>
                            <div class="input-group mb-3" aria-placeholder="">
                                <label for="fechaIngreso" > Fecha de Ingreso </label>
                                <input id="fechaIngreso" type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                            </div>
                            <div class="d-grid gap-2 d-md-block">
                                <a href="#" class="cta"><button class="btn btn-success" type="submit">Registrar</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="column-4">
                        
                    </div>
                </div>
            </div>

            

            
        </Fragment>
    )
}

export default Ventas;
