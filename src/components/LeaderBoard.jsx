import React, { useEffect, useState } from "react";
import { getLeaderBoard } from "../services/api";
import "../css/LeaderBoard.css";



function LeaderBoard() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("top");

  useEffect(() => {
    const fetchData = async () => {
      const result = await getLeaderBoard(filter);
      if (result.success) {
        setUsers(result.data);
      } else {
        console.error(result.msg);
      }
    };
    fetchData();
  }, [filter]);
  
  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">🏆 Clasificación de Aventureros</h2>

      <div className="filter-buttons">
        <button
          className={filter === "top" ? "active" : ""}
          onClick={() => setFilter("top")}
        >
          Top 10
        </button>
        <button
          className={filter === "bottom" ? "active" : ""}
          onClick={() => setFilter("bottom")}
        >
          Últimos 10
        </button>
      </div>

      <div className="leaderboard-list">
        {users.map((user, index) => {
          const position = index + 1;
          const isTop3 = position <= 3;

          return (
            <div
              key={user.idUsers}
              className={`leaderboard-item ${isTop3 ? `top-${position}` : ""}`}
            >
              <span className="position">#{position}</span>

              <div className="user-info">
                <strong className="nombre">{user.nombre}</strong>
              </div>

              <div className="user-info">
                <span className="dato">Nivel: <strong>{user.nivel}</strong></span>
              </div>

              <div className="user-data">
                <span className="dato">XP: <strong>{user.puntos_xp}</strong></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LeaderBoard