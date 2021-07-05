// Cria as rotas de URL que serão utilizadas no projeto

const express = require('express');

const route = express.Router() // Instancia a variavel route com express.Router()

// Cria a rota
route.get('/', (req, res) => res.render("index"))

module.exports = route // Exporta a constante route para onde ele é importado, no caso em server.js