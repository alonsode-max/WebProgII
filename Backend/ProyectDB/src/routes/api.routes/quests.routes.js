const router = require("express").Router()
const { getAllQuests, eraseQuest, changeQuest, getQuestById, AddQuest } = require("../../controllers/quests.controllers")

router.get("/quest", getAllQuests)
router.get("/quest/:id", getQuestById)
router.post("/quest", AddQuest)
router.delete("/quest/:id", eraseQuest)
router.put("/quest/:id", changeQuest)

module.exports = router;