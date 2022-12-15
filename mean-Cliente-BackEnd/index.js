const express = require('express');
const conectarDB= require('./config/db')
const cors = require('cors')

// creacion del server
const app = express();

//Connect to DB
conectarDB();
app.use(cors())
app.use(express.json());
// Definicion de Rutas

app.use('/api/products',require('./routes/producto'));

app.listen(4000,()=>{
  console.log('listening on port 4000');
}) 