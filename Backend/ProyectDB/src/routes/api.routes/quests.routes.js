const router = require("express").Router()
const { getAllQuests, eraseQuest, changeQuest } = require("../../controllers/quests.controllers")

router.get("/quest", getAllQuests)
router.delete("/quest/:id", eraseQuest)
router.put("/quest/:id", changeQuest)

module.exports = router;