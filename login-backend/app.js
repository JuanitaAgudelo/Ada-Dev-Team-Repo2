
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
const mysql      = require('mysql2/promise');
const bluebird = require('bluebird');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'ogioji;esddebgy',
    database: 'adasoft',
})

let connection ;

app.use(cors());

//configura el servidor para recibir datos en formato json
app.use(express.json());

app.get("/get-products", async (request, response) => {
    const [rows, fields] = await connection.execute("SELECT * FROM products");
    response.json(rows);
})

app.post("/add-product",(req,res)=>{
    const correo = req.body.email
    const nombre = req.body.name
    const sqlInsert = "INSERT INTO Usuarios (correo,estado,description) VALUES ('"+correo+"','pendiente','"+nombre+"')";
    db.query(sqlInsert, [correo], (err,result)=>{
        console.log(result);
    });
});

app.put("/update-product", (req,resp) =>{
    const product = req.body;
    console.log(product.name)
    resp.json(product)
})

app.delete("/delete-product", (req,resp) =>{
    const product = req.body;
    console.log(product.name)
    resp.json(product)
})

app.listen(port, async () =>{
    connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'ogioji;esddebgy',
        database: 'adasoft',
        Promise: bluebird
    });

    console.log("servidor ejecutando en puerto: "+ port);
});