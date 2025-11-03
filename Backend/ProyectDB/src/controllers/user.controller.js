const bcrypt = require("bcrypt")
const { insertUser, selectByEmail } = require("../models/user.models")
const { createToken } = require("../utilities/jwt")

const registerUser = async (req, res) => {
    try {
        const user = req.body
        const userDB = await selectByEmail(user.email)

        if (userDB.length !== 0) {
            return res.status(400).json({ success: false, msg: "el email ya existe" })
        }
        user.password = bcrypt.hashSync(user.password, 10)

        const result = await insertUser(user)
        return res.status(202).json({ success: true, insertId: result.insertId })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: error })
    }
}

const login = async (req, res) => {
    try {
        const user = req.body
        const userDb = await selectByEmail(user.email)
        if (userDb.length === 0) {
            return res.status(404).json({ success: false, msg: "email no encontrado" })
        }

        const checkPass = bcrypt.compareSync(user.password, userDb[0].password)
        if (!checkPass) {
            return res.status(400).json({ success: false, msg: "contraseña incorrecta" })
        }
        const token = createToken({
            id: userDb[0].iduser,
            email: userDb[0].email,
            rol: userDb[0].rol
        })
        //modificar de manera de traer la info del user ademas del token
        //query de info user
        //traerlo a res

        return res.status(200).json({ success: true, msg: token })

    } catch (error) {
        return res.status(500).json({ succes: false, msg: error })
    }
}
module.exports = { registerUser, login }