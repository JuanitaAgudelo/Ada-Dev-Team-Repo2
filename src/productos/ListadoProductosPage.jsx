import React, { Fragment, useEffect, useState } from 'react';
import './productosStyles.css';
import Editar from "./img/edit-regular.svg";
import Eliminar from "./img/trash-alt-regular.svg";

function ListadoProductosPage() {

    const state = {
        perPage: 5,
        page: 0,
        pages: 0,
        modalEditar: false
    }

    const [product, setProduct] = useState({
        nombre: '',
        descripcion: '',
        valorUnitario: 0,
        estado: '' 
    })

    const [products, setProducts] = useState([])

    const [listUpdated, setListUpdated] = useState(false)

    let{nombre, descripcion, valorUnitario, estado} = product

    const handleDelete = id => {
    const requestInit = {
        method: 'DELETE'
    }
    fetch('http://localhost:9000/api/' + id, requestInit)
    .then(res => res.text())
    .then(res => console.log(res))

    setListUpdated(true)
    const mensaje = 'Se ha eliminado el producto con id: '+id
    alert(mensaje)
    }

    const handleUpdate = id => {
        valorUnitario = parseInt(valorUnitario, 10)
        //validación de los datos
        if (nombre === '' ||  descripcion === '' || valorUnitario <= 0 ||  estado === '' ) {
            alert('Todos los campos son obligatorios')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(product)
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de producto
        setProduct({
            nombre: '',
            descripcion: '',
            valorUnitario: 0,
            estado: '' 
        })

        setListUpdated(true)
    }     

    useEffect(() => {
    const getProducts = () => {
        fetch('http://localhost:9000/api')
        .then(res => res.json())
        .then(res => setProducts(res))
    }
    getProducts()
    setListUpdated(false)
    }, [listUpdated])
    
    
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
        <div className="container">
            <div className="row-12">
                <div className="column-4">                    
                </div>
                <div className="column-4"> 
                    <table className="table table-striped">       
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
                    {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.nombre}</td>
                        <td>{product.descripcion}</td>
                        <td>{product.valorUnitario}</td>
                        <td>{product.estado}</td>
                        <td>
                            <div className="d-grid gap-2 d-md-block"> 
                                <button onClick={() => handleDelete(product.id)} className="btn btn-danger mx-2 py-1 btn-table"><img src={Eliminar} className="img-small-table"></img></button>
                            
                                <button onClick={() => handleUpdate(product.id)} className="btn btn-warning mx-2 py-1 btn-table" data-bs-toggle="modal" data-bs-target="#editProduct"><img src={Editar} className="img-small-table"></img></button>
                                                                
                            </div>
                        </td>
                    </tr>
                ))}
                    </tbody>          
                    </table>
                </div>
                <div className="column-4">                    
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
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Id Producto" id="mId" />
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Nombre" id="mNombre"/>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Descripción" id="mDescripcion"/>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Valor Unitario" id="mValorUnitario"/>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Estado" id="mEstado"/>
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