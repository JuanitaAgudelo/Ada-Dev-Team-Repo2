const express=require('express');

const app=express();
const mysql=require('mysql');
const cors=require('cors')

const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '456jlo9765',
    database: 'ModuloVentas'
});



app.use(cors());
app.use(express.json())


app.post("/post-ventas", (req, res)=>{

    const cantidad=req.body.cantidad
    const valorTotal=req.body.valorTotal
    const nombreCliente=req.body.nombreCliente

    const sqlInsert = "INSERT INTO sales (cantidad, valorTotal, nombreCliente) VALUES (?,?,?)";
    db.query(sqlInsert, [cantidad, valorTotal, 'nombreCliente'], (err, result)=>{
        console.log(cantidad)
        console.log(valorTotal)
        console.log(nombreCliente)
    });

});

app.listen(3001, ()=>{
    console.log('runing server')
});