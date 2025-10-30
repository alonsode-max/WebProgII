const router = require("express").Router()

const { registerUser,login } = require("../../controllers/user.controller")

// registro
router.post("/register",registerUser)
//login 
router.post("/login",login)

module.exports = router
