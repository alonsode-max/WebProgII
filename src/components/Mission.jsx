import React, { useEffect, useState } from "react"
import { getQuestById, getUserById, postRel, updateUser } from "../services/api"
import { useNavigate, useParams } from "react-router-dom"
import Header from "./Header";
import "../css/Missions.css"


function Mission() {

    let navigate = useNavigate()
    let idUser = localStorage.getItem("id")
    idUser = parseInt(idUser)
    const { idQuests } = useParams()
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

    const handleClick = async () => {
        if (!idUser) {
            navigate("/login")
        }
        else {
            const user = await getUserById(parseInt(idUser))
            delete user.password
            if (answer === mission.resp) {
                alert("Respuesta correcta")
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
                user.nivel = parseInt(user.puntos_xp / 1000)
            }
            else {
                alert("Respuesta incorrecta")
            }
            changeUser(user)
            insertRelation(user.idUsers, mission.idQuests)
            navigate("/missions")
        }
    }


    return (
        <Header>
            <div className="mission-card">
                <h3>{mission.nombre}</h3>
                <p>{mission.pregunta}</p>

                <div className="options">
                    <label>
                        <input type="radio" name="Options" onClick={radAnswer} value={mission.sol1} />
                        {mission.sol1}
                    </label>
                    <label>
                        <input type="radio" name="Options" onClick={radAnswer} value={mission.sol2} />
                        {mission.sol2}
                    </label>
                    <label>
                        <input type="radio" name="Options" onClick={radAnswer} value={mission.sol3} />
                        {mission.sol3}
                    </label>
                    <label>
                        <input type="radio" name="Options" onClick={radAnswer} value={mission.sol4} />
                        {mission.sol4}
                    </label>
                </div>

                <button onClick={handleClick}>Enviar</button>

                <p className="difficulty">
                    <strong>Dificultad:</strong> {mission.rango}
                </p>
            </div>
        </Header>
    )
}

export default Mission;