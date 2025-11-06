import React from "react";
import { Link } from "react-router-dom"; 
import "../css/Home.css";
import Header from "./Header";
import Leaderboard from "./LeaderBoard";

function Home() {
  return (
    <Header>
      <div className="home-page">
        <div className="home-overlay"></div>

        <section className="home-hero">
          <h1 className="home-title">Bienvenido al Gremio de Aventureros</h1>
          <p className="home-text">
            En este gremio podrás unirte a misiones, ganar reputación y
            descubrir tesoros ocultos dignos de un verdadero aventurero.
          </p>
        </section>

        <section className="home-section">
          <h2 className="home-subtitle">Tabla de Honor</h2>
          <p className="home-text">
            En esta tabla están los aventureros más valientes y reconocidos del mes.
          </p>
         <Leaderboard/>
        </section>
        <section className="home-section">
          <h2 className="home-subtitle">Explora</h2>
          <p className="home-text">
            Usa la barra de navegación para recorrer el gremio y aceptar nuevas misiones. 
          </p>

          <div className="imagen-container">
            <Link to="/missions">
              <img 
                src="https://media.istockphoto.com/id/611868178/es/foto/mapa-del-tesoro-pirata.jpg?s=612x612&w=0&k=20&c=lNIrLKgNLIajz6so3ImJCvfc82Fw7fsxa7HSRQXtQRM="
                className="imagen-mapa"
              />
            </Link>
          </div>
        </section>
      </div>
    </Header>
  );
}

export default Home;
