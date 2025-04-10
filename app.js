// express para criar o servidor e defirnir rotas
const express = require("express");

// Crio uma instancia do express
const app = express();

// carrega variaveis de ambientes do arquivo .ENV
require("dotenv").config();

// Estabelece a conexão com o DB, feito peo db.js
require("./db");

// Define a porta do servidor (.ENV ou 3000)
const port = process.env.PORT || 3000;

//importa o roteador de imagens para utilizar as rotas
const PictureRouter = require("./routes/picture");

// Configurando o CORS
app.use((req, res, next) => {
  // Permite que qualquer origem, faça requisições para o servidor
  res.header("Access-Control-Allow-Origin", "*");
  // Permite os métodos GET, POST, DELETE
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
  // Permite que o cabeçalho Content-Type, seja enviado nas req.
  res.header("Access-Control-Allow-Headers", "Content-Type");

  // Chama a próxima rota ou middlewares
  next();
});

//define que todas rotas começam com pictures
// Será tratafa os envios (get, post e etc), pelo pictureRouter
// ex: http://localhost:4000/pictures
app.use("/pictures", PictureRouter);

// Inicia o servidor na porta definida
app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
});
