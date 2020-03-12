const Usuarios = require("../model/usuario");

//cadastro de usuario
exports.post = (req, res) => {
    const usuario = new Usuarios(req.body)
    usuario.save(function(err){
        if (err) res.status(400).send(err);
                   
        else{
            res.status(201).send({
                usuario
            })
        }
    })
}

// login com senha e email

exports.getSignIn = async (req, res, next) => {
    const email = req.params.email;
    const senha = req.params.senha;
    await Usuarios.find({email, senha}, function(err, usuarios){
        if (Object.keys(usuarios).length == 0) return res.status(400).send({message: "Email ou senha invalidos"});
        const info = usuarios.map(usuario =>{
         return{  
            email: usuario.email,
            senha: usuario.senha
        }})
    res.status(200).send({message: "Usuario logado!"})
    
    })}
    

//pega todos os usuarios
exports.getAll = (req, res, next) => {
    Usuarios.find(function(err, usuarios){
        if (err) res.status(400).send(err);
        else{
            res.status(200).send(usuarios)
        }
    })
}

// atualizar por id
exports.updateNome = (req, res, next) => {
    Usuarios.updateOne(
        {_id: req.params.id},
        { $set: req.body },
        {upsert: false},
        function (err) {
            if (Object.keys.length == 0) return res.status(400).send({message: "Email ou senha invalidos"});
            res.status(200).send({ mensagem: "Atualizado com sucesso!" });
        
        }
    )
}

// deletar por email
exports.deleteUsuario = (req, res, next) => {
    Usuarios.findOne({ "email": req.params.email }, function (err, usuario) {
        if (err) res.status(500).send(err);

        if (!usuario) return res.status(404).send({ message: "Não localizamos o usuario para exclusão!" });

        usuario.remove(function (err) {
            if (!err) {
                res.status(200).send({ message: 'Usuario removido com sucesso!' });
            }
        })
    })
};
