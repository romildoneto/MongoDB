const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Pedido = new Schema({

    nomeCliente : {
        type : String,
        required : true
    }, 
    endereco : {
        type : String,
        required : true
    },
    telefone : {
        type : Number,
        required : true
    },
    nomeProduto : {
        type: String,
        required : true
    },
    valorUnitario : {
        type : Number,
        required : true
    },
    quantidade : {
        type : Number,
        required : true
    },
    ValorTotal : {
        type : Number,
        required : true
    }
})

mongoose.model('pedidos', Pedido);