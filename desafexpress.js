const express = require('express')
const Productos = require('./DB/productos')

const app = express();
const prod = new Productos();


app.get('/', (req, res) => {
    res.send(prod.array())
})

app.get('/randomproduct', (req, res) => {
    const object = prod.array();
    const randomId = Math.floor(Math.random() * object.length);
    res.send(object[randomId]);
})

const PORT = 8080;

const server= app.listen(PORT, ()=> {
    console.log(`Server on http://localhost:${PORT}/`)
})

