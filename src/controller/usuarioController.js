const Usuarios = require("../model/usuario");

exports.post = (req, res) => {
    const usuario = new Usuarios(req.body)
    usuario.save(function(err){
        if (err) res.status(400).send(err);
                   
        else{
            res.status(201).send({
                status: true,
                mensagem: "Usuário cadastrado com sucesso!"
            })
        }
    })
}

exports.getAll = (req, res) => {
    Usuarios.find(function(err, usuarios){
        if (err) res.status(400).send(err);
        else{
            res.status(200).send(usuarios)
        }
    })
}

//exports.listMentions = async (req, res) => {
//    try {
 //       const data = await Mentions.find({}, ‘friend mention’);
 //       res.status(200).send(data);
 //     } catch (e) {
 //       res.status(500).send({message: 'Falha ao carregar as menções!'});
 //     }
 //   };