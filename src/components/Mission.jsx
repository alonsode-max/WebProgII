import { useEffect, useState } from "react"
import { getQuestById, getUserById, postRel, updateUser } from "../services/api"

function Mission({ idQuest }) {

    const [mission, setMission] = useState([])
    const [answer, setAnswer] = useState([])

    useEffect(() => {
        const setQuest = async () => {
            const data = await getQuestById(idQuest)
            setMission(data[0])
        }
        setQuest()
    }, [])

    const radAnswer = () => {
        setAnswer(ev.target.value)
    }

    const changeUser = async (user) => {
        const data = await updateUser(user, user.idUsers)
        console.log(data)
    }

    const insertRelation = async (idUser, idQuest) => {
        const data = await postRel(idQuest, idUser)
        console.log(data)
    }

    const handleClick = () => {
        let user = getUserById()   //Falta meter el id por token
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
        <div className="mission-card" style={styles.card}>
            <h3 style={styles.cardTitle}>{mission.nombre}</h3>

            <p style={styles.cardText}>{mission.pregunta}</p>
            <input type="radio" name={mission.sol2} id={mission.sol2} onClick={radAnswer} />
            <input type="radio" name={mission.sol3} id={mission.sol3} onClick={radAnswer} />
            <input type="radio" name={mission.sol4} id={mission.sol4} onClick={radAnswer} />
            <input type="radio" name={mission.sol1} id={mission.sol1} onClick={radAnswer} />
            <button onClick={handleClick}>Enviar</button>

            <p style={styles.cardDifficulty}>
                <strong>Dificultad:</strong> {mission.rango}
            </p>
        </div>
    )
}

export default Mission