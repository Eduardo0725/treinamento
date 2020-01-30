const mongoose = require('mongoose');

const clientShema = new mongoose.Schema({
    nome: String,
    idade: String,
    cpf: Number,
    senha: Number,
})

module.exports = mongoose.model('Client', clientShema);