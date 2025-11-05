import Header from "./Header";
import "../css/About.css";

function About() {
  return (
    <Header>
      <div className="about-page">
        <div className="about-overlay"></div>

        <section className="about-section">
          <h1 className="about-title">Sobre Nosotros</h1>

          <p className="about-text">
            En el <strong>Gremio de Héroes</strong> creemos que todo aventurero
            merece la oportunidad de vivir su propia historia. Nuestra misión es
            ofrecer un espacio donde jugadores, narradores y creadores puedan
            conectar, compartir misiones y forjar leyendas juntos.
          </p>

          <p className="about-text">
            Nos dedicamos a crear y mantener un sistema de misiones que fomenta
            la colaboración, el desafío y la exploración. Cada misión está
            diseñada para impulsar la imaginación y el trabajo en equipo.
          </p>

          <p className="about-text">
            Nuestro equipo está formado por apasionados del rol, la fantasía y
            la aventura. Trabajamos día a día para hacer que tu experiencia en
            el gremio sea épica, justa y llena de oportunidades para crecer como
            héroe.
          </p>

          <p className="about-text">
            Ya seas un novato o un veterano de mil batallas, siempre tendrás un
            lugar en nuestro gremio. ¡Toma tu espada, alza tu escudo y únete a
            la leyenda!
          </p>
        </section>
      </div>
    </Header>
  );
}

export default About;
