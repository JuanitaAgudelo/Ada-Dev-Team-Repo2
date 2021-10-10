const express = require('express');
const app = express();
const port = 3001;//Se pone este valor en lugar de 3000 porque React ya está corriendo en este puerto y deben de ser diferentes
//configura el servidor para recibir datos en formato json
app.use(express.json());

// get the client
const mysql = require('mysql2/promise');
const bluebird = require('bluebird');

// create the connection to database
let connection;

//End Points

//*********************************************************/
//Productos
//*********************************************************/

app.get("/get-product", async (req, res) =>{  
    const[rows, fields] = await connection.execute("SELECT * FROM PRODUCTOS");
    console.log(rows);    
    res.json(rows);    
});

app.post("/add-product", async (req, res) =>{
    const producto = req.body;       
    await connection.execute(`INSERT INTO productos (id, nombre, descripcion, valorUnitario, estado) VALUES (${producto.id},'${producto.nombre}','${producto.descripcion}', ${producto.valorUnitario},'${producto.estado}')`);
    res.json(producto);
    console.log("producto agregado");
    console.log(producto);
});

app.put("/update-product", async(req, res) =>{
    const producto = req.body; 
    const[rows, fields] = await connection.execute(`SELECT * FROM PRODUCTOS WHERE id = ${producto.id}`);
    if(rows[0] != undefined){
        await connection.execute(`UPDATE productos SET nombre = '${producto.nombre}', descripcion = '${producto.descripcion}', valorUnitario = ${producto.valorUnitario}, estado = '${producto.estado}' WHERE id = ${producto.id} `); 
        res.json(producto);
        console.log("producto actualizado");
        console.log(producto);
    }else{
        res.json({"respuesta":"No es valido el id de producto"});
        console.log("No es valido el id de producto");
    };
});

app.delete("/delete-product", async(req, res) =>{
    const producto = req.body;
    const[rows, fields] = await connection.execute(`SELECT * FROM PRODUCTOS WHERE id = ${producto.id}`);
    if(rows[0] != undefined){ 
        await connection.execute(`DELETE FROM productos WHERE id = ${producto.id}`);  
        res.json(producto);
        console.log(`producto con id ${producto.id} se ha eliminado`);
    }else{
        res.json({"respuesta":"No es valido el id de producto"});
        console.log("No es valido el id de producto");
    };
});

//*********************************************************/
//Ventas
//*********************************************************/

app.get("/get-venta", async(request, res) =>{ 
    const[rows, fields] = await connection.execute("SELECT * FROM VENTAS");
    console.log(rows);    
    res.json(rows);    
});

app.post("/add-venta", async(req, res) =>{
    let productoExistente = false;
    let usuarioExistenteAutorizado = false;
    const venta = req.body;  
    let[rows, fields] = await connection.execute(`SELECT * FROM PRODUCTOS WHERE id = ${venta.idProducto}`);
    
    //Verifica que el resultado sea diferente a undefined
    if(rows[0] != undefined){
    
        // Verifica si producto existe y está disponible
        if(rows[0].id == venta.idProducto && rows[0].estado == "disponible"){
            productoExistente = true;
            console.log("producto existente");
        }else{
            res.json({"respuesta":"Producto no disponible"});
            console.log("Producto no disponible");
        };

        //Verifica si usuario existe
        [rows, fields] = await connection.execute(`SELECT * FROM USUARIOS WHERE id = ${venta.idUsuario}`);
        if(rows[0] != undefined){
            if(rows[0].id == venta.idUsuario && rows[0].rol == ' vendedor'){
                usuarioExistenteAutorizado = true;
                console.log("usuario existente autorizado");
            }else{
                res.json({"respuesta":"Usuario no autorizado"});
                console.log("Usuario no existente o no autorizado");
            };
        }else{
            res.json({"respuesta":"No es valido el id de usuario"});
            console.log("No es valido el id de usuario");
        };

        //Si el producto existe y el usuario está autorizado
        if(productoExistente && usuarioExistenteAutorizado){
            await connection.execute(`INSERT INTO ventas (id, Productos_id, cantidad, precioUnitario, valorTotal, nombreCliente, documentoCliente, Usuarios_id, fecha ) VALUES (${venta.id}, ${venta.idProducto}, ${venta.cantidad}, ${venta.precioUnitario}, ${venta.valorTotal}, '${venta.nombreCliente}', ${venta.documentoCliente}, ${venta.idUsuario}, '${venta.fecha}' )`);
            res.json(venta);
            console.log("Venta agregada");
            console.log(venta);
        };
    }
    else{
        res.json({"respuesta":"No es valido el id de producto"});
        console.log("No es valido el id de producto");
    };    
});

app.put("/update-venta", async(req, res) =>{
    const venta = req.body; 
    console.log(venta);
    [rows, fields] = await connection.execute(`SELECT * FROM VENTAS WHERE id = ${venta.id}`);
    console.log[rows[0]];

    //Si la venta a editar existe
    if(rows[0] != undefined){   
        let productoExistente = false;
        let usuarioExistenteAutorizado = false;   
        
        //Verifica si producto existe
        [rows, fields] = await connection.execute(`SELECT * FROM PRODUCTOS WHERE id = ${rows[0].Productos_id}`);
        //console.log(rows[0]);
        if(rows[0] != undefined){
            if(rows[0].id == venta.Productos_id && rows[0].estado == 'disponible'){
                productoExistente = true;
                console.log("producto existente");
            }else{               
                console.log("Producto no disponible");
            };
        }else{
            
            console.log("No es valido el id de producto");
        }
        //Verifica si usuario existe
        [rows, fields] = await connection.execute(`SELECT * FROM USUARIOS WHERE id = ${venta.Usuarios_id}`);
        //console.log(rows[0]);
        if(rows[0] != undefined){
            if(rows[0].id != undefined && rows[0].rol == ' vendedor' && rows[0].estado == 'habilitado'){
                usuarioExistenteAutorizado = true;
                console.log("usuario existente autorizado");
            }else{
                
                console.log("Usuario no existente o no autorizado");
            };
        }else{           
            console.log("No es valido el id de usuario");
        }

        //Si el producto existe y el usuario está autorizado se puede editar
        if(productoExistente && usuarioExistenteAutorizado){
            await connection.execute(`UPDATE ventas SET Productos_id = ${venta.Productos_id}, cantidad = ${venta.cantidad}, precioUnitario = ${venta.precioUnitario}, valorTotal = ${venta.valorTotal}, nombreCliente = '${venta.nombreCliente}', documentoCliente = ${venta.documentoCliente}, Usuarios_id = ${venta.Usuarios_id}, fecha = '${venta.fecha}' WHERE id =${venta.id}`);
            console.log(`venta con id ${venta.id} se ha actualizado`); 
            res.json(venta);
            console.log(venta);
        }else{
            if (!productoExistente && usuarioExistenteAutorizado) {
                res.json({"respuesta":"Producto no disponible"});
                console.log("Producto no disponible aqui es")
            } else if(productoExistente && !usuarioExistenteAutorizado){
                res.json({"respuesta":"Usuario no autorizado"});
                console.log("Usuario no autorizado")
            }else{
                res.json({"respuesta":"Producto no disponible y Usuario no autorizado"});
                console.log("Producto no disponible y Usuario no autorizado")
            }
        }
    }else{
        res.json({"respuesta":"No es valido el id de venta"});
        console.log("No es valido el id de venta");
    }     
});

app.delete("/delete-venta", async (req, res) =>{
    const venta = req.body; 
    console.log(venta);
    [rows, fields] = await connection.execute(`SELECT * FROM VENTAS WHERE id = ${venta.id}`);
    console.log(rows[0]);
    //Si la venta a eliminar existe
    if(rows[0] != undefined){   
        [rows, fields] = await connection.execute(`DELETE FROM ventas WHERE id = ${venta.id}`);
        res.json(venta);
        console.log(`venta con id ${venta.id} se ha eliminado`);        
    }else{
        res.json({"respuesta":"No es valido el id de venta"});
        console.log("No es valido el id de venta");
    }
    
});

//*********************************************************/
//Usuarios
//*********************************************************/

app.get("/get-usuario", async(request, res) =>{  
    const[rows, fields] = await connection.execute("SELECT * FROM USUARIOS");
    console.log(rows);    
    res.json(rows); 
});
app.post("/add-usuario", async(req, res) =>{
    const usuario = req.body;
    await connection.execute(`INSERT INTO usuarios (id, correo, rol, estado) VALUES (${usuario.id}, '${usuario.correo}', '${usuario.rol}', '${usuario.estado}')`);    
    res.json(usuario);
    console.log("usuario agregado")
    console.log(usuario);
});

app.put("/update-usuario", async(req, res) =>{
    const usuario = req.body;
    const[rows, fields] = await connection.execute(`SELECT * FROM USUARIOS WHERE id = ${usuario.id}`);
    if(rows[0] != undefined){
        await connection.execute(`UPDATE usuarios SET correo = '${usuario.correo}', rol = ' ${usuario.rol}', estado = '${usuario.estado}' where id = ${usuario.id}`);  
        res.json(usuario);
        console.log("usuario actualizado");
        console.log(usuario);
    }else{
        res.json({"respuesta":"No es valido el id de usuario"});
        console.log("No es valido el id de usuario");
    };
});

app.delete("/delete-usuario", async(req, res) =>{
    const usuario = req.body;
    const[rows, fields] = await connection.execute(`SELECT * FROM USUARIOS WHERE id = ${usuario.id}`);
    if(rows[0] != undefined){ 
        await connection.execute(`DELETE FROM usuarios WHERE id = ${usuario.id}`)  
        res.json(usuario);
        console.log(`usuario con id ${usuario.id} se ha eliminado`);  
    }else{
        res.json({"respuesta":"No es valido el id de usuario"});
        console.log("No es valido el id de usuario");
    }
});

//Creacion del servidor en el puerto 3001
app.listen(port, async () => {
    connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'adasoft',
        Promise: bluebird
    });   

    console.log(`Server running on: http://localhost:${port}`);
});
