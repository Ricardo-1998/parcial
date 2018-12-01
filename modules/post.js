const mongoose = require('mongoose');

let modelo = new mongoose.Schema({
    materia: String,
    uv: String,
    descripcon: String
});

module.exports = mongoose.model('post', modelo);