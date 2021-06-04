const express = require("express");
const server = express();
const routes = require("./routes");
const path = require("path");

const porta = process.env.PORT || 3000;

// usando template engine
server.set('view engine', 'ejs')

// Mudar a localização da pasta views
server.set('views', path.join(__dirname, 'views'))

// habilitar arquivos statics
server.use(express.static("public"))

// usar o req.body
server.use(express.urlencoded({ extended: true }))

// rotas
server.use(routes)


server.listen(porta, () => console.log('rodando...'));