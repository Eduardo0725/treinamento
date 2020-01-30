const mongoose = require('mongoose');

const personalShema = new mongoose.Schema({
    nome: String,
    idade: String,
    area: String,
    cpf: Number,
    senha: Number,
})

module.exports = mongoose.model('Personal', personalShema);