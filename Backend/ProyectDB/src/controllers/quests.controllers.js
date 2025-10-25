const { getQuests, searchQuestById, eraseQ } = require("../models/quests.models")

const getAllQuests = async (req, res) => {
    try {
        const result = await getQuests()
        res.status(200).json({ data: result })
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}

const eraseQuest = async (req, res) => {
    try {
        const { id } = req.params
        const quest = await searchQuestById(id)
        if (quest.length === 0) {
            res.status(404).json("La misión no existe")
        }
        else {
            const result = await eraseQ(id)
            res.status(200).json({ data: "Se ha eliminado con éxito" })
        }
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}

const changeQuest = async (req, res) => {
    try {
        const { id } = req.params
        const quest = req.body
        const questSelect = await searchQuestById(id)
        if (questSelect.length === 0) {
            res.status(404).json("La quest no existe")
        }
        else {
            const result = await updateQuest(id, quest)
            if (result.affectedRows !== 0) {
                res.status(202).json({ data: "Quest modificada con exito" })
            }
        }
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}
changeQuest


module.exports = { getAllQuests, eraseQuest, changeQuest }