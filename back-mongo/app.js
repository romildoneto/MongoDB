const express = require('express')
const app = express()
const mongoose =require('mongoose')
const cors =require ('cors')
const bodyParser = require('body-parser')

app.use(express.json())
//model
 require("./src/db/models/Usuario")
 const Usuario = mongoose.model('usuarios')

 require('./src/db/models/Produto');
const Produto = mongoose.model("produto");

//conexao db
require("./src/db/connect")

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/produto', async(req, res) => {
    const produtoResponse = await Produto.find();
    const produtoJson = await produtoResponse;

    return res.json(produtoJson);
});


// faz o selecte da tabela
app.get('/usuarios',async(req,res)=>{
   const usuariosResponse = await Usuario.find()
   const usuariosJson = await usuariosResponse

   return res.json(usuariosJson)

});

app.post('/usuarios',async(req,res)=>{
    const novoUsuario = new Usuario({
        nome:req.body.nome,
        mensagem:req.body.mensagem
    });

    novoUsuario.save()
    res.json({menssage:"Cadastro Cconcluido com Sucesso",usuario:novoUsuario})
})

app.listen(3334)