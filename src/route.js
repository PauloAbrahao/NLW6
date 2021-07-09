// Cria as rotas de URL que serão utilizadas no projeto

const express = require('express');
const questionController = require('./controllers/questionController')

const route = express.Router() // Instancia a variavel route com express.Router()

// Cria a rota
route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

route.get('/room', (req, res) => res.render("room"))

// formato que o formulario de dentro da modal deve passar a informação
     route.post('/room/:room/:question/:action', questionController.index)
// : pegam as variaveis do html para passagem de informações

module.exports = route // Exporta a constante route para onde ele é importado, no caso em server.js