import './css/styles.css';

function Login() {
    return (
        <div className="Login">
            <div className="container w-100 bg-primary mt-4 mb-4 rounded shadow" >
                <div className="row align-items-center align-items-stretch">
                    <div className="col d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded bg">

                    </div>

                    <div className="col bg-white pb-5 col-lg-7 col-xl-6 rounded-end">
                        <div className="text-end mt-3 mb-4">
                            <img src="./media/img/logo.jpeg" alt="" className="pt-1 anchoimagen" />
                        </div>
                        <h2 className="fw-bold text-center pt-5 mb-5">Bienvenido</h2>
                        <div className="w-75 my-4 ms-5 d-grid">
                            <button className="btn btn-primary mb-4" type="button">
                                        <img src="./media/img/gmail.png" width="30px" alt="" className="me-4" />
                                        Inicia Sesión
                            </button>
                            <button type="button" className="btn btn-light btn-outline-dark border-primary mt-5" data-bs-toggle="modal" data-bs-target="#modalCRUD2">Regístrate</button>
                        </div>
                        <div className="pt-5 mt-5">

                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="modalCRUD2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header fondo-header">
                            <h5 className="modal-title fs-2 letra-header" id="exampleModalLabel" >Registrar usuario</h5>
                        </div>
                        <form id="formEditar">
                            <div className="modal-body">
                                <div className ="form-group">
                                    <label for="ID" className ="col-form-label label-color">Nombre: </label>
                                    <input type ="text" className ="form-control border-dark" id="ID" placeholder="Nombre" value="" />
                                </div>
                                <div className ="form-group">
                                    <label for="Correo" className ="col-form-label label-color">Correo: </label>
                                    <input type ="text" className ="form-control border-dark" id="Correo" placeholder="Correo" value="" />
                                </div>
                            </div>
                            <div className ="modal-footer">
                            <button className ="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type ="submit" id="btnEditar" className ="btn btn-primary botonenviar">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;