import React from 'react'
import MissionForm from "./MissionForm";
import Header from './Header';


function Admin({ userLogin }) {
    if (!userLogin) {
        return (
            <p style={styles.denied}>Acceso denegado</p>
        );
    }

    return (
        <Header>
        <div classname="admin-page">
            <h1 classname="admin-title">Panel de administración</h1>
            <MissionForm />
        </div>
        </Header>
    );
}
export default Admin