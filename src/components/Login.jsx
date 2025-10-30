import { useState } from "react";
import Header from "./Header";

function Login({ setUser, setPage }) {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.username === "admin" && form.password === "1234") {
      setUser({ username: "admin", isAdmin: true });
      setPage("admin");
    } else {
      setUser({ username: form.username, isAdmin: false });
      setPage("home");
    }
  };

  return (
    <Header>
    <div style={styles.container}>
      <div style={styles.center}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <h2 style={styles.title}>Iniciar sesión</h2>
          <input
            style={styles.input}
            type="text"
            placeholder="Usuario"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
          <input
            style={styles.input}
            type="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button style={styles.button}>Entrar</button>
        </form>
      </div>
    </div>
    </Header>
  );
}

const styles = {
container: {
    height: "100%",
    fontFamily: "'MedievalSharp', cursive",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
  },
  center: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    backgroundColor: "rgba(253, 245, 230, 0.95)",
    padding: "2rem",
    borderRadius: "16px",
    border: "4px double #7a4e2b",
    boxShadow: "6px 6px 12px #00000033",
    width: "350px",
  },
  title: {
    textAlign: "center",
    fontSize: "1.8rem",
    marginBottom: "1.5rem",
    color: "#5b2e0c",
    textShadow: "1px 1px #fff3",
  },
  input: {
    width: "100%",
    padding: "0.6rem",
    marginBottom: "0.8rem",
    borderRadius: "10px",
    border: "2px solid #7a4e2b",
    fontFamily: "'MedievalSharp', cursive",
    backgroundColor: "#fdf5e6",
    color: "#3b2e2e",
    fontSize: "1rem",
  },
  button: {
    width: "100%",
    padding: "0.6rem",
    marginBottom: "0.8rem",
    borderRadius: "10px",
    backgroundColor: "#7a4e2b",
    color: "#fdf5e6",
    fontWeight: "bold",
    cursor: "pointer",
    border: "2px solid #5b2e0c",
    fontFamily: "'MedievalSharp', cursive",
    fontSize: "1.1rem",
    transition: "all 0.2s ease",
  },
};
export default Login;

