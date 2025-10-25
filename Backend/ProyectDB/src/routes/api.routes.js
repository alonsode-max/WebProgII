const router = require("express").Router()

router.use("/", require("./api.routes/users.routes"))

module.exports = router;