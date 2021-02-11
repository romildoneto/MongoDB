const mongoose = require("mongoose");

function connect() {
  mongoose
    .connect("mongodb://localhost:/fseletro", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("conectado com banco de dado 'fseletro'");
    })
    .catch((error) => {
      console.log(`erro ao tentar a conexão${error}`);
    });
}


module.exports = connect()