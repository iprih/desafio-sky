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
    Usuarios.find({email, senha}, function(err, usuarios){
        if (err) return res.status(400).send({message: "Email ou senha invalidos"});
        const info = usuarios.map(usuario =>{
         return{  
            email: usuario.email,
            senha: usuario.senha
        }})
    res.status(200).send(info)
    
    })}
    
    //Usuarios.findOne({email}, function(err,Usuarios){
     //   if (err) res.status(500).send(err);
    //    res.status(200).send(Usuarios)
   // })
//}



/*exports.postSignIn = async (req, res, next) => {
    const { email } = req.body;
    const emaill = await Usuarios.find({email});
    if(!emaill) {
        return res.status(401).send({message: err})
     }
     res.status(200).send(email);
        }


*/


//pega todos os usuarios
exports.getAll = (req, res, next) => {
    Usuarios.find(function(err, usuarios){
        if (err) res.status(400).send(err);
        else{
            res.status(200).send(usuarios)
        }
    })
}

//exports.getSignIn = (req, res, next ) = {

//}

//exports.listMentions = async (req, res) => {
//    try {
 //       const data = await Mentions.find({}, ‘friend mention’);
 //       res.status(200).send(data);
 //     } catch (e) {
 //       res.status(500).send({message: 'Falha ao carregar as menções!'});
 //     }
 //   };