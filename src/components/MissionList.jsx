import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { getAllQuests } from "../services/api";

export default function MissionList() {
  const [missions, setMissions] = useState([])

  useEffect(() => {
    const setQuest = async () => {
      const answer = await getAllQuests()
      setMissions(answer)
      console.log(answer)
    }
    setQuest()
  }, [])

  const handleClick = (id) => {
    console.log(id);
    //navigate con el id
  }

  return (
    <Header>
      <div style={styles.page}>
        <h2 style={styles.title}>Tablón de Misiones</h2>
        <div style={styles.cardsContainer}>
          {missions.map((m) => (
            <Link to={`/mission/${m.idQuests}`} key={m.idQuests} ><div className="mission-card" style={styles.card}>
              <h3 style={styles.cardTitle}>{m.nombre}</h3>
              <p style={styles.cardText}>{m.descrip}</p>
              <p style={styles.cardDifficulty}>
                <strong>Dificultad:</strong> {m.rango}
              </p>
            </div></Link>
          ))}
        </div>
      </div>
    </Header>
  );
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

