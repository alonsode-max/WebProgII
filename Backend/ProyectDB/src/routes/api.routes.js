const router = require("express").Router()

router.use("/quest", require("./api.routes/quests.routes"))
router.use("/user", require("./api.routes/user.routes"))

module.exports = router;