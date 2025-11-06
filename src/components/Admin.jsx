import React from 'react'
import MissionForm from "./MissionForm";

function Admin({ userLogin }) {
    if (!userLogin) {
        return (
            <p style={styles.denied}>Acceso denegado</p>
        );
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Panel de administración</h1>
            <MissionForm />
        </div>
    );
}

const styles = {
    container: {
        padding: "2rem",
        fontFamily: "'MedievalSharp', cursive",
        minHeight: "100vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    title: {
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "1rem",
        color: "#5b2e0c",
    },
    denied: {
        display:"flex",
        justify_content: "center",
        color: "#5b2e0c",
        textAlign: "center",
        marginTop: "2rem",
        fontWeight: "bold",
        fontSize: "1.2rem",
    },
};
export default Admin