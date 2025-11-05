import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import "../css/Login.css";
import Header from "./Header";

const initialLogin = { email: "", password: "" };
const initialRegister = { nombre: "", apellido: "", email: "", password: "" };

function Login() {
  const { login, logout } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState("login"); 
  const [user, setUser] = useState(initialLogin);
  const [formData, setFormData] = useState(initialRegister);
  const [error, setError] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleInputChange = (ev) => {
    const { id, value } = ev.target;
    if (activeTab === "login") {
      setUser({ ...user, [id]: value });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleLogin = async (ev) => {
    ev.preventDefault();
    if (!user.email || !user.password) {
      setError("Debes completar todos los campos.");
      return;
    }
    if (!user.email.includes("@")) {
      setError("El correo no es válido.");
      return;
    }

    const success = await login(user);
    if (!success) {
      setError("Email o contraseña incorrectos.");
      return;
    }

    setError("");
    setServerMessage("¡Bienvenido, aventurero!");
    setStatus("success");
  };

  const handleRegister = async (ev) => {
    ev.preventDefault();

    if (!formData.nombre || !formData.apellido || !formData.email || !formData.password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("El formato del correo no es válido");
      return;
    }
    if (formData.password.length < 4) {
      alert("La contraseña debe tener al menos 4 caracteres");
      return;
    }

    try {
      const resp = await fetch("http://localhost:3005/api/user/register", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      const data = await resp.json();
      if (resp.ok && data.success) {
        setStatus("success");
        setServerMessage("Registro completado correctamente. ¡Bienvenido al gremio!");
        setActiveTab("login");
      } else {
        setStatus("error");
        setServerMessage(data.msg || "Error al registrar el usuario.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setServerMessage("Error al conectar con el servidor.");
    }
  };

  return (
    <Header>
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Gremio de Aventureros</h2>

        <div className="tabs">
          <button
            className={activeTab === "login" ? "tab active" : "tab"}
            onClick={() => setActiveTab("login")}
          >
            Iniciar sesión
          </button>
          <button
            className={activeTab === "register" ? "tab active" : "tab"}
            onClick={() => setActiveTab("register")}
          >
            Registrarse
          </button>
        </div>

        {activeTab === "login" && (
          <form onSubmit={handleLogin} className="form-section">
            <label>Email</label>
            <input
              type="email"
              id="email"
              onChange={handleInputChange}
              value={user.email}
              placeholder="tuemail@aventura.com"
            />
            <label>Contraseña</label>
            <input
              type="password"
              id="password"
              onChange={handleInputChange}
              value={user.password}
            />
            <input type="submit" value="Entrar" className="btn" />
            {error && <p className="error-text">{error}</p>}
          </form>
        )}

        {activeTab === "register" && (
          <form onSubmit={handleRegister} className="form-section">
            <label>Nombre</label>
            <input type="text" id="nombre" onChange={handleInputChange} value={formData.nombre} />
            <label>Apellidos</label>
            <input type="text" id="apellido" onChange={handleInputChange} value={formData.apellido} />
            <label>Email</label>
            <input type="email" id="email" onChange={handleInputChange} value={formData.email} />
            <label>Contraseña</label>
            <input
              type="password"
              id="password"
              onChange={handleInputChange}
              value={formData.password}
            />
            <input type="submit" value="Registrarse" className="btn" />
          </form>
        )}

        {serverMessage && (
          <p className={status === "success" ? "success-text" : "error-text"}>
            {serverMessage}
          </p>
        )}
      </div>
    </div>
    </Header>
  );
}

export default Login;
