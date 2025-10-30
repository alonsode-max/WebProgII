import Header from "./Header";

function Contact() {
  return (
    <Header>
      <div style={styles.page}>
        <div style={styles.overlay}></div>

        <section style={styles.section}>
          <h1 style={styles.title}>Contáctanos</h1>

          <p style={styles.text}>
            ¿Tienes alguna duda o sugerencia?  
            Estamos aquí para escucharte.  
            Puedes escribirnos a través de este correo para que te la solucionemos
            MissionHeroes@gmail.com
          </p>

          <p style={styles.text}>
            También puedes contactarnos para proponer nuevas misiones, colaborar
            con el proyecto o resolver cualquier problema con tu cuenta.  
            ¡El gremio siempre está dispuesto a ayudar a sus héroes!
          </p>
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
    width: "100%",
    minHeight: "100%",
    padding: "2rem 0",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(245, 238, 210, 0.35)",
    backdropFilter: "blur(2px)",
    zIndex: 0,
  },
  section: {
    position: "relative",
    zIndex: 1,
    maxWidth: "600px",
    width: "90%",
    textAlign: "center",
    padding: "3rem 2rem",
    backgroundColor: "rgba(255, 250, 240, 0.6)",
    borderRadius: "12px",
    border: "2px solid #b8860b",
    boxShadow: "2px 2px 6px #00000022",
  },
  title: {
    fontSize: "2.4rem",
    marginBottom: "1.5rem",
    color: "#3b220a",
    textShadow: "2px 2px #fff3",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#2c1a0a",
    marginBottom: "1.5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.8rem",
    borderRadius: "8px",
    border: "1px solid #b8860b",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    fontSize: "1rem",
  },
  textarea: {
    padding: "0.8rem",
    borderRadius: "8px",
    border: "1px solid #b8860b",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    fontSize: "1rem",
    resize: "none",
  },
  button: {
    padding: "0.8rem",
    backgroundColor: "#7a4e2b",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
};
export default Contact;