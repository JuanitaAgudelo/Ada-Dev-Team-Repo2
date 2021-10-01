import React from "react";
import Buscar from "./img/search-solid.svg";
function BarraBusqueda() {
    return (
        <div class="container-fluid">
            <div class="mt-5"></div>

            <div class="row">
                <div class="col">
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Buscar usuario" aria-label="Search"/>
                        <button id="Buscar" class ="btn btn-success" type ="submit"><img src={Buscar}
                        class ="img-small" alt="Busqueda"/></button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default BarraBusqueda;