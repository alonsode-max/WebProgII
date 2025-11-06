import React from 'react'
import { useState } from "react";

export default function MissionForm() {
    const [mission, setMission] = useState({
        title: "",
        description: "",
        difficulty: "Fácil",
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Misión creada:", mission);
        alert("Misión creada correctamente (modo sin conexión)");
    };

    return (
        <form onSubmit={handleSubmit} classname="mission-form-container">
            <input
                type="text"
                placeholder="Título"
                value={mission.title}
                onChange={(e) => setMission({ ...mission, title: e.target.value })}
            />
            <textarea
                placeholder="Descripción"
                value={mission.description}
                onChange={(e) =>
                    setMission({ ...mission, description: e.target.value })
                }
            />
            <select classname="mission-form-container button"
                value={mission.difficulty}
                onChange={(e) =>
                    setMission({ ...mission, difficulty: e.target.value })
                }
            >
                <option>S</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
            </select>
            <input
                type="file"
                onChange={(e) => setMission({ ...mission, image: e.target.files[0] })}
            />
            <button>Crear misión</button>
        </form>
    );
}