import Header from "./Header";

function Home() {
  return (
    <Header>
      <div style={styles.page}>
        <div style={styles.overlay}></div>

        <section style={styles.hero}>
          <h1 style={styles.title}>¡Bienvenido, valiente aventurero!</h1>
          <p style={styles.text}>
            El gremio de héroes te da la bienvenida. Explora misiones épicas,
            supera desafíos y obtén recompensas dignas de una leyenda.
          </p>
          <a href="#missions" style={styles.button}>
            Explorar Misiones
          </a>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>Cómo funciona</h2>
          <div style={styles.cardsContainer}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>1. Únete al gremio</h3>
              <p style={styles.cardText}>
                Regístrate como aventurero y accede al tablón de misiones.
              </p>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>2. Acepta misiones</h3>
              <p style={styles.cardText}>
                Los administradores publican misiones con distintos niveles de
                dificultad y recompensa.
              </p>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>3. Gana gloria</h3>
              <p style={styles.cardText}>
                Completa tus misiones, sube de nivel y demuestra tu valor ante
                todo el reino.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Header>
  );
}

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "3rem",
    width: "100%",
    minHeight: "100%",
    padding: "2rem 0",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "transparent",
    position: "relative",
    overflow: "hidden",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(245, 238, 210, 0.35)",
    zIndex: 0,
  },
  hero: {
    position: "relative",
    zIndex: 1,
    maxWidth: "800px",
    width: "90%",
    textAlign: "center",
    padding: "3rem 2rem",
  },
  title: {
    fontSize: "2.8rem",
    marginBottom: "1rem",
    color: "#3b220a",
    textShadow: "2px 2px #fff3",
  },
  text: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    color: "#2c1a0a",
    marginBottom: "2rem",
  },
  button: {
    padding: "0.8rem 2rem",
    backgroundColor: "#7a4e2b",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.1rem",
    transition: "0.3s",
  },
  section: {
    position: "relative",
    zIndex: 1,
    maxWidth: "900px",
    width: "90%",
    textAlign: "center",
    padding: "2rem",
  },
  subtitle: {
    fontSize: "2rem",
    marginBottom: "1.5rem",
    color: "#3b220a",
    textShadow: "1px 1px #fff3",
  },
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1.5rem",
  },
  card: {
    backgroundColor: "rgba(255, 250, 240, 0.5)",
    border: "2px solid #b8860b",
    borderRadius: "12px",
    padding: "1.5rem",
    width: "260px",
    boxShadow: "2px 2px 6px #00000022",
  },
  cardTitle: {
    fontSize: "1.3rem",
    color: "#3b220a",
    marginBottom: "0.5rem",
  },
  cardText: {
    fontSize: "1rem",
    color: "#2c1a0a",
    fontFamily: "MedievalSharp",
  },
};
export default Home;
