//mongoose
const mongoose = require('mongoose');


const UsuariosSchema = new mongoose.Schema({    
    nome: {type: String},
    email: {type: String, require: true, unique:true},
    senha: {type: String, require: true},
    telefones: [{
    numero: {type: String},
    ddd: {type: String},
    }],
    criacaoDt: {type: Date, default: Date.now},
    atualizacaoDt: {type: Date, default: Date.now},
    ultimologinDt: {type: Date, default: Date.now},
},
{
    versionKey: false
}
);

const Usuarios = mongoose.model('Usuarios', UsuariosSchema);

module.exports = Usuarios;