const bcrypt = require("bcrypt")
const { insertUser, selectByEmail, updateUser, searchUserById, insertRelation } = require("../models/user.models")
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
        console.log(result.insertId)

        
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: error })
    }
}

const addRelation = async (req, res) => {
    try {
        const rel = req.body
        const result = await insertRelation(rel)
        return res.status(202).json({ success: true, insertId: result })
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
            id: userDb[0].idusers,
            email: userDb[0].email,
            rol: userDb[0].rol
        })
        //modificar de manera de traer la info del user ademas del token
        //query de info user
        //traerlo a res
        return res.status(200).json({ success: true, token: token, user: {
        id: userDb[0].idUsers,   
        nombre: userDb[0].nombre,
        apellido: userDb[0].apellido,
        email: userDb[0].email,
        rol: userDb[0].rol,
        nombre_usuario: userDb[0].nombre_usuario,
        puntos_xp: userDb[0].puntos_xp,
        nivel: userDb[0].nivel
    } })

    } catch (error) {
        return res.status(500).json({ succes: false, msg: error })

    }
}

const editUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = req.body
        const userSelect = await searchUserById(id)
        if (userSelect.length === 0) {
            res.status(404).json("Inicia sesión para jugar")
        }
        else {
            const result = await updateUser(id, user)
            if (result.affectedRows !== 0) {
                res.status(202).json({ data: "Usuario modificada con exito" })
            }
        }
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await searchUserById(req.params.id)
        if (user.length === 0) {
            return res.status(400).json({ success: false, msg: "El usuario no existe" })
        }
        return res.status(202).json({ success: true, data: user })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: error })
    }
}



module.exports = { registerUser, login, editUser, getUserById, addRelation }