import { Link } from "react-router-dom";

function Header({ children }) {
  return (
    <header style={styles.header}>
      <div style={styles.top}>
        <div style={styles.logo}>🗡️ HeroMissions</div>
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/login" style={styles.link}>Login</Link>
          <Link to="/missions" style={styles.link}>Missions</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
          <Link to="/admin" style={styles.link}>admin</Link>
        </nav>
      </div>
      <div style={styles.centerContent}>
        {children}
      </div>
    </header>
  );
}

const styles = {
  header: {
    height: "100vh",
    width: "100vw",
    backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    color: "#fdf5e6",
    fontFamily: "'MedievalSharp', cursive",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "rgba(122, 78, 43, 0.8)",
  },
  logo: { fontSize: "1.8rem", fontWeight: "bold" },
  nav: { display: "flex", gap: "1rem" },
  link: {
    color: "#fdf5e6",
    textDecoration: "none",
    fontWeight: "bold",
    fontFamily: "'MedievalSharp', cursive",
    fontSize: "1.1rem",
    padding: "0.3rem 0.6rem",
    borderRadius: "6px",
    transition: "all 0.2s ease",
  },
  centerContent: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  },
};
export default Header;
