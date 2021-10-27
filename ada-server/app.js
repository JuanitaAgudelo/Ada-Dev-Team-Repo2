const { request } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const mysql = require('mysql2/promise');
let connection;//variable para almacenar las conexiones a la base de datos
const bluebird = require('bluebird');
//configura el servidor para recibir datos en json
app.use(express.json());
app.use(cors());
app.set('port', process.env.PORT || port);

//End Points

//*********************************************************/
app.get("/", (req, res) => {
    res.json("Backend ada dev team");
});
//Productos
//*********************************************************/

app.get("/get-products", async (req, res) =>{  
    const[rows, fields] = await connection.execute("SELECT * FROM Productos");
    console.log(rows);    
    res.json(rows);    
});

app.post("/add-product", async (req, res) => {
    const producto = req.body;  
    await connection.execute(`INSERT INTO Productos (nombre, descripcion, valorUnitario, estado) VALUES ('${producto.nombre}','${producto.descripcion}', ${producto.valorUnitario},'${producto.estado}')`);
    res.json(producto);
    console.log("Producto agregada");
    console.log(producto);
});


app.put("/update-product/:id", async(req, res) =>{
    const id= req.params.id;
    const producto = req.body; 
    const[rows, fields] = await connection.execute(`SELECT * FROM Productos WHERE id = ${id}`);
    if(rows[0] != undefined){
        await connection.execute(`UPDATE Productos SET nombre = '${producto.nombre}', descripcion = '${producto.descripcion}', valorUnitario = ${producto.valorUnitario}, estado = '${producto.estado}' WHERE id = ${id} `); 
        res.json(producto);
        console.log("producto actualizado");
        console.log(producto);
    }else{
        res.json({"respuesta":"No es valido el id de producto"});
        console.log("No es valido el id de producto");
    };
});

app.delete("/delete-product/:id", async(req, res) =>{
    const id= req.params.id;
    // const producto = req.body;
    const[rows, fields] = await connection.execute(`SELECT * FROM Productos WHERE id = ${id}`);
    if(rows[0] != undefined){ 
        await connection.execute(`DELETE FROM Productos WHERE id = ${id}`);  
        res.json(producto);
        console.log(`producto con id ${id} se ha eliminado`);
    }else{
        res.json({"respuesta":"No es valido el id de producto"});
        console.log("No es valido el id de producto");
    };
});

//*********************************************************/
//Ventas
//*********************************************************/

app.get("/get-venta", async (request, res) => {
    const [rows, fields] = await connection.execute("SELECT * FROM Ventas");
    res.json(rows);
});

app.post("/add-venta", async (req, res) => {
    const venta = req.body;
    await connection.execute(`INSERT INTO Ventas (Productos_id, cantidad, precioUnitario, valorTotal, nombreCliente, documentoCliente, Usuarios_id, fecha, vendedor) VALUES (${venta.Productos_id}, ${venta.cantidad}, ${venta.precioUnitario}, ${venta.valorTotal}, '${venta.nombreCliente}', ${venta.documentoCliente}, ${venta.Usuarios_id}, '${venta.fecha}', '${venta.vendedor}' )`);
    res.json(venta);
    console.log("Venta agregada");
    console.log(venta);
});

app.put("/update-venta/:id", async (req, res) => {
    const id = req.params.id;
    const venta = req.body;
    await connection.execute(`UPDATE Ventas SET Productos_id = ${venta.Productos_id}, cantidad = ${venta.cantidad}, precioUnitario = ${venta.precioUnitario}, valorTotal = ${venta.valorTotal}, nombreCliente = '${venta.nombreCliente}', documentoCliente = ${venta.documentoCliente}, Usuarios_id = ${venta.Usuarios_id}, fecha = '${venta.fecha}', vendedor = '${venta.vendedor}' WHERE id =${id}`);
    console.log(`venta con id ${id} se ha actualizado`);
    res.json(venta);
});

app.delete("/delete-venta/:id", async (req, res) => {
    const id=req.params.id;
    [rows, fields] = await connection.execute(`SELECT * FROM Ventas WHERE id = ${id}`);
    console.log(rows[0]);
    //Si la venta a eliminar existe
    if (rows[0] != undefined) {
        [rows, fields] = await connection.execute(`DELETE FROM Ventas WHERE id = ${id}`);
        res.json(venta);
        console.log(`venta con id ${id} se ha eliminado`);
    } else {
        res.json({ "respuesta": "No es valido el id de venta" });
        console.log("No es valido el id de venta");
    }

});

//*********************************************************/
//Usuarios
//*********************************************************/

app.get("/get-usuario", async (req, res) => {
    const [rows, fields] = await connection.execute("SELECT * FROM Usuarios");
    res.send(rows);
});
app.post("/add-usuario", async (req, res) => {
    const usuario = req.body;
    const correo = usuario.correo;
    const rol = usuario.rol;
    const estado = usuario.estado;
    await connection.execute(`INSERT INTO Usuarios (correo, rol, estado) VALUES('${correo}','${rol}','${estado}');`);
    res.json(usuario);
    console.log("usuario agregado");
});
app.get("/get-informacion-usuario/:correo", async (req, res) => {
    const correo = req.params.correo;
    const [rows, fields] = await connection.execute(`SELECT * FROM Usuarios WHERE correo='${correo}';`);
    console.log(rows);
    res.send(rows);
});
app.put("/update-usuario/:id", async (req, res) => {
    const id = req.params.id;
    const usuarioactual = req.body;
    const rol = usuarioactual.rol;
    const estado = usuarioactual.estado;
    await connection.execute(`UPDATE Usuarios SET rol='${rol}', estado='${estado}' WHERE id=${id};`);
    res.json(usuarioactual);
});
app.delete("/delete-usuario/:id", async (req, res) => {
    const id=req.params.id;
    const [rows, fields] = await connection.execute(`SELECT * FROM Usuarios WHERE id = ${id}`);
    if (rows[0] != undefined) {
        await connection.execute(`DELETE FROM Usuarios WHERE id = ${id}`)
        res.json(id);
        console.log(`usuario con id ${id} se ha eliminado`);
    } else {
        res.json({ "respuesta": "No es valido el id de usuario" });
        console.log("No es valido el id de usuario");
    }
});
//Creacion del servidor en el puerto 3001
app.listen(app.get('port'), async () => {
    connection = await mysql.createConnection({
        host: 'sql10.freesqldatabase.com',
        user: 'sql10447201',
        password: 'QiB7dv5A1A',
        database: 'sql10447201',
        port: 3306,
        Promise: bluebird
    });
    console.log("Server running on port: " + app.get('port'));
});