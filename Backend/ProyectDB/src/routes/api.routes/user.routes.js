const router = require("express").Router()

const { registerUser, login, editUser, getUserById, addRelation, getLeaderBoard } = require("../../controllers/user.controller")

// registro
router.post("/register", registerUser)
//login 
router.post("/login", login)
router.put("/edit/:id", editUser)
router.get("/:id", getUserById)
router.post("/relation", addRelation)
//leaderBoard
router.get("/LeaderBoard",getLeaderBoard)

module.exports = router