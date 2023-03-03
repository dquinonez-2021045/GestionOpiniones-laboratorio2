const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    name: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: [true, 'El password es obligatorio']
    },

})

    
module.exports = model('Usuario', UsuarioSchema);