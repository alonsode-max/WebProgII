import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { editUser } from "./Login";
import { UserContext } from "../../context/UserContext";
import logo from "./image.png"

function Profile() {
    const { user } = useContext(UserContext);

    const initial = user || {
        userName: "",
        email: "",
        age: "",
        city: "",
        role: "user",
        password: "",
    };

    const [newUser, setUser] = useState(initial);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSubmits = (ev) => {
        ev.preventDefault();
        editUser(newUser, user?.password);
    };

    const handleChange = (ev) => {
        setUser({ ...newUser, [ev.target.id]: ev.target.value });
    };

    return (
        <div style={styles.page}>
            <header style={styles.header}>
                <div style={styles.leftHeader}>
                    <div style={styles.menuContainer}>
                        <button
                            style={styles.menuBtn}
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            ☰ Menú
                        </button>
                        {menuOpen && (
                            <ul style={styles.dropdown}>
                                <li>
                                    <Link to="/" style={styles.link}>
                                        Inicio
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/reviews" style={styles.link}>
                                        Your reviews
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/addcom" style={styles.link}>
                                        Add Commerce
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/profile" style={styles.link}>
                                        Profile info
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                    <h2 style={styles.logo}>CommerceNet</h2>
                </div>

                <div style={styles.rightHeader}>
                    <img
                        src={logo}
                        alt="Logo"
                        style={styles.headerImg}
                    />
                </div>
            </header>

            <main style={styles.main}>
                <div style={styles.commerceCard}>
                    <h2 style={styles.commerceTitle}>Perfil de Usuario</h2>
                    <form onSubmit={handleSubmits} style={styles.form}>
                        <div style={styles.field}>
                            <label style={styles.commerceLabel} htmlFor="userName">
                                Username:
                            </label>
                            <input
                                onChange={handleChange}
                                type="text"
                                id="userName"
                                value={newUser.userName || ""}
                                style={styles.input}
                            />
                        </div>

                        <div style={styles.field}>
                            <label style={styles.commerceLabel} htmlFor="email">
                                Email:
                            </label>
                            <input
                                onChange={handleChange}
                                type="email"
                                id="email"
                                value={newUser.email || ""}
                                style={styles.input}
                            />
                        </div>

                        <div style={styles.field}>
                            <label style={styles.commerceLabel} htmlFor="age">
                                Edad:
                            </label>
                            <input
                                onChange={handleChange}
                                type="number"
                                id="age"
                                value={newUser.age || ""}
                                style={styles.input}
                            />
                        </div>

                        <div style={styles.field}>
                            <label style={styles.commerceLabel} htmlFor="city">
                                Ciudad:
                            </label>
                            <input
                                onChange={handleChange}
                                type="text"
                                id="city"
                                value={newUser.city || ""}
                                style={styles.input}
                            />
                        </div>

                        <p>
                            <span style={styles.commerceLabel}>Role:</span> {newUser.role}
                        </p>

                        <button type="submit" style={styles.saveBtn}>
                            Guardar cambios
                        </button>
                    </form>
                </div>
            </main>
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