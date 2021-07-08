// Cria o servidor onde será disponibilizado o projeto

const express = require('express'); // Importa o express
const route = require('./route') // Importa o arquivo route que foi criado
const path = require('path')

const server = express(); // Instancia o express para server

server.set('view engine', 'ejs') // Passa para o express que a view engine utilizada será o ejs
// OBS: 'view engine' nao tem nada a ver com a pasta view

server.use(express.static("public")) // Torna acessível o uso da pasta 'public' e torna-a uma página estática

server.set('views', path.join(__dirname, 'views')) // o 'path' pega o caminho da pasta onde está o projeto e junta(join) ao arquivo atual

server.use(route) // Usa o arquivo route

server.listen(3000, ()=> console.log("RODANDO!!!"))
/* Digitar 'npm start' para iniciar o projeto */