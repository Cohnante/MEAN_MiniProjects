const Producto = require('../models/products');

exports.crearProducto = async (req,res) =>{
  
  try {
    let producto;

    //Creacion del producto
    producto = new Producto(req.body);

    await producto.save();
    res.send(producto);

  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }

}

exports.ObtenerProducto = async (req,res) =>{
  try {
    
    const producto = await Producto.find();
    res.json(producto);

  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
exports.ActualizarProducto = async (req,res) =>{
  try {
    
    const { Nombre,Categoria,Ubicacion,Precio} = req.body;
    let producto = await Producto.findById(req.params.id);

    if(!producto){
      res.status(404).json({msg:"Producto no encontrado"});
    }

    producto.Nombre = Nombre;
    producto.Categoria = Categoria;
    producto.Ubicacion = Ubicacion;
    producto.Precio = Precio;
    producto = await Producto.findByIdAndUpdate({_id: req.params.id},producto,{new:true});
    res.json(producto);

  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    
  }
}
exports.BuscarProducto = async (req,res) => {

  try {
    let producto = await Producto.findById(req.params.id);

    if(!producto){
      res.status(404).json({msg:"Producto no encontrado"});
    }
    res.json(producto);
    

  } catch (error) {
    console.log(error);
    res.status(500).send(error);

  }
}

exports.BorrarProducto = async (req,res) => {

  try {
    let producto = await Producto.findById(req.params.id);

    if(!producto){
      res.status(404).json({msg:"Producto no encontrado"});
    }

    await Producto.findByIdAndRemove({_id: req.params.id});

    res.json({msg:"Producto borrado"});
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}