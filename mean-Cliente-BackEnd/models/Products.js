const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
  Nombre:{
    type:String,
    required:true,
  },
  Categoria:{
    type:String,
    required:true,
  },
  Ubicacion:{
    type:String,
    required:true,
  },
  Precio:{
    type:String,
    required:true,
  },
  FechaCreacion:{
    type:String,
    default:Date.now()
  }
});

module.exports = mongoose.model('Producto', ProductoSchema)