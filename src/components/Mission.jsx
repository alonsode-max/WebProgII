import React, { useEffect, useState } from "react"
import { getQuestById, getUserById, postRel, updateUser } from "../services/api"
import { useParams } from "react-router-dom"

function Mission() {

    const idUser = localStorage.getItem("id")
    const { idQuests } = useParams()
    console.log(idQuests)
    const [mission, setMission] = useState([])
    const [answer, setAnswer] = useState([])

    useEffect(() => {
        const setQuest = async () => {
            const data = await getQuestById(idQuests)
            setMission(data[0])
        }
        setQuest()
    }, [])

    const radAnswer = (ev) => {
        setAnswer(ev.target.value)
    }

    const changeUser = async (user) => {
        const data = await updateUser(user, user.idUsers)
        console.log(data)
    }

    const insertRelation = async (idUser, idQuests) => {
        const data = await postRel(idQuests, idUser)
        console.log(data)
    }

    const handleClick = () => {
        if (!idUser) {
            //navegar al home
        }

        //let user = getUserById(idUser)
       // let user = getUserById(parseInt(idUser))
        if (answer === mission.resp) {
            switch (mission.rango) {
                case 'S':
                    user.puntos_xp += 500;
                    break;
                case 'A':
                    user.puntos_xp += 400;
                    break;
                case 'B':
                    user.puntos_xp += 300;
                    break;
                case 'C':
                    user.puntos_xp += 200;
                    break;
                case 'D':
                    user.puntos_xp += 100;
                    break;
            }
            if (user.puntos_xp % 1000 === 0) {
                user.nivel++;
            }
        }
        changeUser(user)
        insertRelation(user.idUsers, mission.idQuests)
    }


    return (
        <div className="mission-card">
            <h3 style={styles.cardTitle}>{mission.nombre}</h3>

            <p style={styles.cardText}>{mission.pregunta}</p>
            <input type="radio" name="Options" id={mission.sol2} onClick={radAnswer} value={mission.sol2} /> <label htmlFor={mission.sol2}>{mission.sol2} </label>
            <input type="radio" name="Options" id={mission.sol3} onClick={radAnswer} value={mission.sol3} /> <label htmlFor={mission.sol3}>{mission.sol3} </label>
            <input type="radio" name="Options" id={mission.sol4} onClick={radAnswer} value={mission.sol4} /> <label htmlFor={mission.sol4}>{mission.sol4} </label>
            <input type="radio" name="Options" id={mission.sol1} onClick={radAnswer} value={mission.sol1} /> <label htmlFor={mission.sol1}>{mission.sol1} </label>
            <button onClick={handleClick}>Enviar</button>

            <p style={styles.cardDifficulty}>
                <strong>Dificultad:</strong> {mission.rango}
            </p>
        </div>
    )
}
export default Mission;