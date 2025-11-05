import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
//import { editUser } from "./Login";
import { UserContext } from "../context/UserContext";



function Profile() {
    const { userLog, logout } = useContext(UserContext);

    console.log(userLog,"perfil")
    const initial = userLog || {
        userName: "",
        email: "",
        age: "",
        city: "",
        role: "",
        password: ""
    };

    //const [newUser, setUser] = useState(initial);
    //const [menuOpen, setMenuOpen] = useState(false);

    const handleSubmits = (ev) => {
        ev.preventDefault();
        //editUser(newUser, user?.password);
    };

    const handleLogout = () => {
        logout()
    }

    return (
    <div className="profile-container">
      <h1 className="profile-title">Perfil de Usuario</h1>

      <div className="profile-card">
        <div className="profile-header">
          <img
            src={userLog.avatar || "https://via.placeholder.com/100"}
            alt="Foto de perfil"
            className="profile-avatar"
          />
          <h2>{userLog.nombre_usuario || "Usuario sin nombre"}</h2>
        </div>

        <div className="profile-info">
          <p><strong>ID:</strong> {userLog.id}</p>
          <p><strong>Nombre:</strong> {userLog.nombre}</p>
          <p><strong>Correo electrónico:</strong> {userLog.email}</p>
          <p><strong>Rol:</strong> {userLog.role || "Usuario"}</p>
          <p><strong>Fecha de registro:</strong> {userLog.created_at || "N/A"}</p>
        </div>

        <div>
          <p><strong>Nivel:</strong> {userLog.nivel}</p>
          <p><strong>XP:</strong> {userLog.puntos_xp}</p>          
        </div>
        <div className="profile-actions">
          <button className="edit-btn">Editar perfil</button>
          <button onClick={handleLogout} >Cerrar sesión</button>
        </div>
      </div>
    </div>
    );
}

const styles = {
    page: {
        fontFamily: "Arial, sans-serif",
        width: "100vw",
        minHeight: "100vh",
        overflowX: "hidden",
        backgroundColor: "#f5f7fa",
        display: "flex",
        flexDirection: "column",
    },
    header: {
        width: "100%",
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        backgroundColor: "#003366",
        color: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    },
    leftHeader: {
        display: "flex",
        alignItems: "center",
    },
    menuContainer: {
        position: "relative",
    },
    menuBtn: {
        backgroundColor: "#fff",
        color: "#003366",
        border: "none",
        padding: "10px 20px",
        borderRadius: "10px",
        cursor: "pointer",
        fontWeight: "bold",
    },
    dropdown: {
        position: "absolute",
        top: "45px",
        left: "0",
        listStyle: "none",
        backgroundColor: "#fff",
        color: "#003366",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    },
    link: {
        textDecoration: "none",
        color: "#003366",
        display: "block",
        padding: "8px 0",
        cursor: "pointer",
        fontWeight: "bold",
    },
    logo: {
        marginLeft: "20px",
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#fff",
    },
    rightHeader: {},
    headerImg: {
        height: "50px",
        borderRadius: "10px",
    },
    main: {
        flex: "1 0 auto",
        padding: "40px 10%",
    },
    commerceCard: {
        backgroundColor: "#fff",
        borderRadius: "12px",
        padding: "30px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },
    commerceTitle: {
        fontSize: "2rem",
        marginBottom: "20px",
        color: "#003366",
    },
    commerceLabel: {
        fontWeight: "bold",
        color: "#003366",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    field: {
        display: "flex",
        flexDirection: "column",
    },
    input: {
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        marginTop: "5px",
    },
    saveBtn: {
        marginTop: "20px",
        padding: "12px",
        backgroundColor: "#003366",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
    },
};

export default Profile;