const router = require("express").Router()

router.use("/user",require("./api.routes/user.routes"))

module.exports = router