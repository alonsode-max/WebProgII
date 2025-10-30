import { useState } from "react";
import Header from "./Header";

export default function MissionList() {
  const [missions] = useState([
    {
      id: 1,
      title: "Salvar al gato del árbol",
      description:
        "Ayuda al gato perdido a bajar del árbol sin hacerle daño. Se requiere delicadeza y algo de ingenio.",
      difficulty: "Fácil",
    },
    {
      id: 2,
      title: "Recuperar el tesoro perdido",
      description:
        "Encuentra el tesoro escondido en el bosque misterioso. Prepárate para trampas y guardianes antiguos.",
      difficulty: "Difícil",
    },
    {
      id: 3,
      title: "Proteger la aldea de bandidos",
      description:
        "Defiende a los aldeanos durante la noche de ataques sorpresa. Valor, estrategia y trabajo en equipo.",
      difficulty: "Media",
    },
  ]);

  return (
    <Header>
    <div style={styles.page}>
      <h2 style={styles.title}>Tablón de Misiones</h2>
      <div style={styles.cardsContainer}>
        {missions.map((m) => (
          <div key={m.id} className="mission-card" style={styles.card}>
            <h3 style={styles.cardTitle}>{m.title}</h3>
            <p style={styles.cardText}>{m.description}</p>
            <p style={styles.cardDifficulty}>
              <strong>Dificultad:</strong> {m.difficulty}
            </p>
          </div>
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

