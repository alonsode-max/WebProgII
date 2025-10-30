import Header from "./Header";

function About() {
    return (
        <Header>
            <div style={styles.page}>
                <div style={styles.overlay}></div>

                <section style={styles.section}>
                    <h1 style={styles.title}>Sobre Nosotros</h1>

                    <p style={styles.text}>
                        En el <strong>Gremio de Héroes</strong> creemos que todo aventurero
                        merece la oportunidad de vivir su propia historia. Nuestra misión es
                        ofrecer un espacio donde jugadores, narradores y creadores puedan
                        conectar, compartir misiones y forjar leyendas juntos.
                    </p>

                    <p style={styles.text}>
                        Nos dedicamos a crear y mantener un sistema de misiones que fomenta
                        la colaboración, el desafío y la exploración. Cada misión está
                        diseñada para impulsar la imaginación y el trabajo en equipo.
                    </p>

                    <p style={styles.text}>
                        Nuestro equipo está formado por apasionados del rol, la fantasía y
                        la aventura. Trabajamos día a día para hacer que tu experiencia en
                        el gremio sea épica, justa y llena de oportunidades para crecer como
                        héroe.
                    </p>

                    <p style={styles.text}>
                        Ya seas un novato o un veterano de mil batallas, siempre tendrás un
                        lugar en nuestro gremio. ¡Toma tu espada, alza tu escudo y únete a
                        la leyenda!
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
        backgroundImage:
            "url('https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1600&q=80')", // 🌲 bosque
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
        maxWidth: "800px",
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
        marginBottom: "1.2rem",
    },
};
export default About;