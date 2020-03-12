const express = require("express");
const router = express.Router();
const controller = require("../controller/usuarioController");


router.post("/", controller.post)
//router.post("/signin", controller.postSignIn)

router.get("/", controller.getAll)
router.get("/:email/:senha/signin", controller.getSignIn)

module.exports = router;