import React from "react"
import Header from "./Header";
import "../css/Contact.css";

function Contact() {
  return (
    <Header>
      <div className="contact-page">
        <div className="contact-overlay"></div>

        <section className="contact-section">
          <h1 className="contact-title">Contáctanos</h1>

          <p className="contact-text">
            ¿Tienes alguna duda o sugerencia? <br />
            Estamos aquí para escucharte. Puedes escribirnos a través de este correo:
          </p>

          <p className="contact-email">📧 MissionHeroes@gmail.com</p>

          <p className="contact-text">
            También puedes contactarnos para proponer nuevas misiones, colaborar
            con el proyecto o resolver cualquier problema con tu cuenta.
            <br />
            ¡El gremio siempre está dispuesto a ayudar a sus héroes!
          </p>
        </section>
      </div>
    </Header>
  );
}

export default Contact;
