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

        let user = getUserById(parseInt(idUser))
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

const styles = {
    container: {
        textAlign: "center",
        padding: "2rem",
        position: "relative",
        zIndex: 1,
    },
    title: {
        fontSize: "2.4rem",
        color: "#5b2e0c",
        marginBottom: "2rem",
        textShadow: "2px 2px #fff3",
        fontFamily: "'Cinzel Decorative', serif",
    },
    cardsContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1.5rem",
    },
    card: {
        backgroundColor: "rgba(255, 248, 230, 0.8)",
        backgroundImage:
            "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
        border: "2px solid #b8860b",
        borderRadius: "14px",
        padding: "1.5rem",
        width: "270px",
        boxShadow: "4px 4px 8px #00000033",
        transition: "all 0.3s ease",
        cursor: "pointer",
    },
    cardTitle: {
        fontSize: "1.4rem",
        color: "#3b220a",
        marginBottom: "0.8rem",
        fontWeight: "bold",
        fontFamily: "'Cinzel Decorative', serif",
    },
    cardText: {
        fontSize: "1rem",
        color: "#2c1a0a",
        lineHeight: "1.5",
        marginBottom: "0.8rem",
        fontFamily: "'Spectral', serif",
    },
    cardDifficulty: {
        fontSize: "0.95rem",
        color: "#7a4e2b",
        fontStyle: "italic",
        fontFamily: "'Spectral', serif",
    },
    page: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        minHeight: "100%",
        padding: "2rem 0",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
    },
};

export default Mission