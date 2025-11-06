const pool = require("../config/conex")

const searchQuestById = async (id) => {
    const select = "SELECT * FROM quests WHERE idQuests=?";
    const [result] = await pool.query(select, id)
    return result;
}

const getQuests = async () => {
    const select = "SELECT * FROM quests";
    const [result] = await pool.query(select)
    return result
}

const eraseQ = async (id) => {
    const erase = "DELETE FROM quests WHERE idQuests=?";
    const [result] = await pool.query(erase, id)
    return result
}

const updateQuest = async (id, quest) => {
    const isId = await searchQuestById(id)
    if (parseInt(isId.length) === 0) {
        const { nombre, descrip, puntos, rango } = quest
        const update = "UPDATE quests SET nombre = ?, descrip=?, puntos=? rango=? WHERE idCliente= ?";
        const [result] = await pool.query(update, [nombre, descrip, puntos, rango, id])
        return result
    }
    else {
        return "No se encontró el id"
    }
}

const getQuestUser = async (id) => {
    const select = "SELECT q.idQuests AS idQuests FROM quests AS q INNER JOIN quests_has_users AS qu on q.idQuests = qu.quests_idQuests INNER JOIN users AS u ON u.idUsers = qu.users_idUsers where u.idUsers = ?";
    const [result] = await pool.query(select, id)
    return result
}

const insertQuest = async (quest) => {
    const { nombre, descrip, puntos, rango } = quest
    const insert = "INSERT INTO quests (nombre, descrip, puntos, rango) values(?,?,?,?)";
    const [result] = await pool.query(insert, [nombre, descrip, puntos, rango])
    return result
}

module.exports = { searchQuestById, getQuests, eraseQ, updateQuest, insertQuest, getQuestUser }