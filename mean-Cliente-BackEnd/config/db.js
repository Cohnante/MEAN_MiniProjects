const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config({path: 'variables.env'});


const conectarBD = async ()=>{
  url = process.env.MONGO_URL
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(url,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Connected to MongoDB');
  }catch(e){
    console.log(e);
    process.exit(1)
  }
}

module.exports = conectarBD;