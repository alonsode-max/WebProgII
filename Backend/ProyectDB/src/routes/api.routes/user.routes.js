const router = require("express").Router()

const { registerUser, login, editUser, getUserById, addRelation } = require("../../controllers/user.controller")

// registro
router.post("/register", registerUser)
//login 
router.post("/login", login)
router.put("/edit/:id", editUser)
router.get("/:id", getUserById)
router.post("/relation", addRelation)

module.exports = router