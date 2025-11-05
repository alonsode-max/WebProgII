const pool = require("../config/conex.js")

//register
const insertUser = async (user) => {
    const { nombre, apellido, email, password,nombre_usuario } = user
    const insert = "insert into users(nombre, apellido, email, password, nombre_usuario) value(?,?,?,?,?)"
    const [result] = await pool.query(insert, [nombre, apellido, email, password, nombre_usuario])
    return result
}

// login 
const login = async (user) => {
    const { email, password, rol } = user
    const getUser = "select * from users(email,password,rol) value(?,?,?)"
    const [result] = await pool.query(getUser, [email, password, rol])
    return result
}

// agarrar email
const selectByEmail = async (email) => {
    const sql = "SELECT * FROM users WHERE email =  ?";
    const [result] = await pool.query(sql, [email])
    return result;
}

const searchUserById = async (id) => {
    const sql = "SELECT * FROM users WHERE idUsers =  ?";
    const [result] = await pool.query(sql, id)
    return result;
}

const updateUser = async (id, user) => {
    let { nombre, apellido, email, password, puntos_xp, nivel, rol } = user
    const sql = "UPDATE users SET nombre = ?, apellido=?, email=? password=? puntos_xp=? nivel=? rol=? WHERE idUsers= ?";
    const [result] = await pool.query(sql, [nombre, apellido, email, password, puntos_xp, nivel, rol, id])
    return result;
}

const insertRelation = async (rel) => {
    const { quests_idQuests, users_idUsers } = user
    const insert = "INSERT INTO quests_has_users (quests_idQuests, users_idUsers) value(?,?)"
    const [result] = await pool.query(insert, [quests_idQuests, users_idUsers])
    return result
}


module.exports = { insertUser, selectByEmail, login, searchUserById, updateUser, insertRelation }