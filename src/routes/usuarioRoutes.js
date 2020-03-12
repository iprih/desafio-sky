const express = require("express");
const router = express.Router();
const controller = require("../controller/usuarioController");


router.post("/usuario", controller.post)
//router.post("/signin", controller.postSignIn)


router.get("/", (req, res, next) => {
    res.status(200).send({
        title: 'Desafio Sky - API Restful'
    });
});

router.get("/usuario", controller.getAll)

router.get("/usuario/:email/:senha/signin", controller.getSignIn)

router.put("/usuario/:_id", controller.updateNome)

router.delete("/usuario/:email", controller.deleteUsuario)

module.exports = router;