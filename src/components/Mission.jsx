import React, { useEffect, useState } from "react";
import "../css/Missions.css";
import Header from "./Header";

function Missions() {
  const [missions, setMissions] = useState([]);
  const [selectedMission, setSelectedMission] = useState(null);

  useEffect(() => {
    const exampleMission = [
      {
        idQuests: 1,
        nombre: "El Tesoro del Bosque Antiguo",
        descripcion:
          "En los confines del bosque de Eldwyn, se oculta un cofre sellado con magia ancestral. Solo los dignos pueden romper su sello. Tu tarea es encontrar el talismán del druida y usarlo en el altar del claro iluminado.",
        rango: "A",
        recompensa: 400,
        pregunta: "¿Qué criatura custodia el altar del claro?",
      },
      {
        idQuests: 2,
        nombre: "Sombras en la Fortaleza",
        descripcion:
          "Una antigua fortaleza al norte ha sido tomada por bandidos. El gremio necesita exploradores para infiltrarse y obtener información sobre su líder.",
        rango: "B",
        recompensa: 300,
        pregunta: "¿Cuál es el nombre del jefe bandido?",
      },
    ];
    setMissions(exampleMission);
  }, []);

  const handleSelect = (mission) => {
    setSelectedMission(mission);
  };

  const closeModal = () => {
    setSelectedMission(null);
  };

  return (
    <Header>
      <div className="missions-page">
        <div className="missions-overlay"></div>
        <h1 className="missions-title">Misiones del Gremio</h1>
        <p className="missions-subtext">
          Elige tu próximo desafío, aventurero. Cada misión te otorgará experiencia y honor.
        </p>

        <div className="missions-grid">
          {missions.map((mission) => (
            <div
              key={mission.idQuests}
              className="mission-card"
              onClick={() => handleSelect(mission)}
            >
              <h3>{mission.nombre}</h3>
              <p>
                Dificultad: <strong>{mission.rango}</strong>
              </p>
              <p className="mission-summary">
                {mission.descripcion.slice(0, 80)}...
              </p>
            </div>
          ))}
        </div>

        {selectedMission && (
          <div className="mission-modal">
            <div className="mission-modal-content">
              <button className="close-btn" onClick={closeModal}>
                ✕
              </button>
              <h2>{selectedMission.nombre}</h2>
              <p className="modal-diff">
                <strong>Dificultad:</strong> {selectedMission.rango}
              </p>
              <p className="modal-text">{selectedMission.descripcion}</p>
              <p>
                <strong>Recompensa:</strong> +{selectedMission.recompensa} XP
              </p>
              <p>
                <strong>Pregunta:</strong> {selectedMission.pregunta}
              </p>

              <button className="mission-btn">Aceptar misión</button>
            </div>
          </div>
        )}
      </div>
    </Header>
  );
}

export default Missions;
