require('./config/config');

let Schema = mongoose.Schema;

const mongoose = require('mongoose');

let productoSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    precio: {
        type: Number,
        required: [true, 'El correo es necesario']
    },
    Creado_en: { type: Date, default: Date.now }
});

module.exports = mongoose.model('producto', usuarioproducto);

