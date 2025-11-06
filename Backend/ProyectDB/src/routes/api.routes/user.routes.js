const router = require("express").Router()

const { registerUser, login, editUser, getUserById, addRelation, getLeaderBoard,deleteUser } = require("../../controllers/user.controller")

// registro
router.post("/register", registerUser)
//login 
router.post("/login", login)
router.put("/edit/:id", editUser)
router.get("/obtain/:id", getUserById)
router.post("/relation", addRelation)
router.delete("/delete/:id", deleteUser);

//leaderBoard
router.get("/LeaderBoard",getLeaderBoard)

module.exports = router