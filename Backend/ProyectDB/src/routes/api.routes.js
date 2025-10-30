const router = require("express").Router()

router.use("/", require("./api.routes/quests.routes"))

module.exports = router;