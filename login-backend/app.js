
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const mysql  = require('mysql2/promise');
const bluebird = require('bluebird');
let connection;
const db = mysql.createPool({
        // host: 'localhost',
        // user: 'root',
        // password: 'ogioji;esddebgy',
        // database: 'adasoft',
    host: '64.37.48.8',
    user: 'systempl_adaroot',
    password: 'adasoft2021',
    database: 'systempl_adasoft',
})

//configura el servidor para recibir datos en formato json
app.use(express.json());

app.use(cors());
app.set('port',process.env.PORT || port)

app.post("/add-user",(req,res)=>{
    const correo = req.body.email
    const nombre = req.body.name
    const sqlInsert = "INSERT INTO usuarios (correo,estado) VALUES ('"+correo+"','pendiente')";
    // const sqlInsert = `INSERT INTO Usuarios (correo,estado) VALUES (${correo},'pendiente')`;
    db.query(sqlInsert, [correo], (err,result)=>{
    console.log(result);
    });
});
          // app.listen(port, async () =>{
            // connection = await mysql.createConnection({
            // host: 'localhost',
            // user: 'root',
            // password: 'ogioji;esddebgy',
            // database: 'adasoft',

app.listen(app.get('port'), async () =>{
    connection = await mysql.createConnection({
        host: '64.37.48.8',
        user: 'systempl_adaroot',
        password: 'adasoft2021',
        database: 'systempl_adasoft',
        Promise: bluebird
     });

    console.log("servidor ejecutando en puerto: "+ port);
});