const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Usuario = new Schema({
nome : {
    type: String,
    required:true
},

mensagem:{
    type:String,
    required:true
}

})

mongoose.model('usuarios',Usuario)