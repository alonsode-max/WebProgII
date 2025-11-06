const router = require("express").Router()
const { getAllQuests, eraseQuest, changeQuest, getQuestById, AddQuest, getNotQuestsByUser } = require("../../controllers/quests.controllers")
const { checkAdmin } = require("../../middleware/middleware")

router.get("/quest", getAllQuests)
router.get("/questF/:id", getNotQuestsByUser)
router.get("/quest/:id", getQuestById)
router.post("/quest", checkAdmin, AddQuest)
router.delete("/quest/:id", checkAdmin, eraseQuest)
router.put("/quest/:id", checkAdmin, changeQuest)

module.exports = router;