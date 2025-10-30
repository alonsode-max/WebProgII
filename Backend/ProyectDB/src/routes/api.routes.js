const router = require("express").Router()

router.use("/", require("./api.routes/quests.routes"))
router.use("/user", require("./api.routes/user.routes"))

module.exports = router;