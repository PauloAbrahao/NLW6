// Cria as rotas de URL que serão utilizadas no projeto

const express = require('express');
const questionController = require('./controllers/questionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router() // Instancia a variavel route com express.Router()

// Cria a rota
route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

route.post('/create-room', RoomController.create)
route.get('/room/:room',RoomController.open)
route.post('/enterroom', RoomController.enter)
// : pegam as variaveis do html para passagem de informações

// formato que o formulario de dentro da modal deve passar a informação
route.post('/question/create/:room', questionController.create)
route.post('/question/:room/:question/:action', questionController.index)


module.exports = route // Exporta a constante route para onde ele é importado, no caso em server.js