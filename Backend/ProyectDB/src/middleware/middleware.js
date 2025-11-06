const { verifyToken } = require("../utilities/jwt");

const authUser = (req, res, next) => {
    try {
        const tokenHeader = req.headers.authorization;
        if (!tokenHeader) {
            res.json({ msg: "Haz Log In" })
        }
        const token = tokenHeader.split(" ")[1];
        const resultToken = verifyToken(token)
        if (!resultToken) {
            res.json({ msg: "Acceso denegado" })
        }
        else {
            req.infoUser = resultToken
            next()
        }
    } catch (error) {
        console.log(error)
    }
}

const checkAdmin = (req, res, next) => {
    if (req.infoUser.role === 'A') {
        next()
    }
    else {
        res.json({ msg: "Solo admins pueden acceder a este servicio" })
    }
}




//middleware plan id existe

module.exports = { authUser, checkAdmin }