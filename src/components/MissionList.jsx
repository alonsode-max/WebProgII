import React, { useEffect, useState } from "react";
import "../css/MissionsList.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import { getAllQuests } from "../services/api";

function MissionsList() {
  const [missions, setMissions] = useState([]);
  const [selectedMission, setSelectedMission] = useState(null);

  useEffect(() => {
    const setQuests = async () => {
      const data = await getAllQuests()
      setMissions(data)
    }
    setQuests();
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
                {mission.descripcion}...
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

              <Link to={`/mission/${selectedMission.idQuests}`}><button className="mission-btn">Aceptar misión</button></Link>
            </div>
          </div>
        )}
      </div>
    </Header>
  );
}

export default MissionsList;
