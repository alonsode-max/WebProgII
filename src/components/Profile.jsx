import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { updateUser, deleteUser, getUserById } from "../services/api";
import "../css/Profile.css"
import { UserContext } from "../context/Usercontext";

function Profile() {
  const [profile, setProfile] = useState({})
  const [editMode, setEditMode] = useState(false);
  const user = localStorage.getItem("user")
  const idUser = localStorage.getItem("id")
  console.log(idUser)
  const [formData, setFormData] = useState(user || {});


  useEffect(() => {
    const setUser = async () => {
      const data = await getUserById(idUser)
      setProfile(data)
    }
    setUser()
  }, [])

  const handleLogout = () => logout();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = async () => {
    const resp = await updateUser(formData, idUser);
    if (resp.success) {
      alert("Perfil actualizado correctamente");
      setUserLog(formData);
      setEditMode(false);
    } else {
      alert("Error al actualizar el perfil");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("¿Seguro que deseas eliminar tu cuenta? Esta acción no se puede deshacer.")) {
      const resp = await deleteUser(idUser);
      if (resp.success) {
        alert("Usuario eliminado correctamente");
        logout();
      } else {
        alert("Error al eliminar usuario");
      }
    }
  };

  return (
    <Header>
      <div className="profile-page">
        <div className="profile-overlay"></div>
        <div className="main-profile-container">
          <h1 className="profile-title">Perfil de Usuario</h1>

          <div className="profile-card">
            <div className="profile-avatar-container">
              <h2 className="profile-username">
                {profile.nombre_usuario || "Usuario sin nombre"}
              </h2>
            </div>

            <div className="profile-info">
              {editMode ? (
                <>
                  <label >Nombre:
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                  </label>

                  <label >Apellido:
                    <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} />
                  </label>

                  <label >Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                  </label>

                  <label >Contraseña:
                    <input type="text" name="password" value={formData.password} onChange={handleChange} />
                  </label>
                </>
              ) : (
                <>
                  <p><strong>ID:</strong> {profile.id}</p>
                  <p><strong>Nombre:</strong> {profile.nombre}</p>
                  <p><strong>Correo:</strong> {profile.email}</p>
                  <p><strong>Rol:</strong> {profile.rol}</p>
                  <p><strong>Nivel:</strong> {profile.nivel}</p>
                  <p><strong>XP:</strong> {profile.puntos_xp}</p>
                </>
              )}
            </div>

            <div className="profile-actions">
              {editMode ? (
                <>
                  <button className="save-btn" onClick={handleEdit}>Guardar cambios</button>
                  <button className="cancel-btn" onClick={() => setEditMode(false)}>Cancelar</button>
                </>
              ) : (
                <button className="edit-btn" onClick={() => setEditMode(true)}>Editar perfil</button>
              )}
              <button className="delete-btn" onClick={handleDelete}>Eliminar cuenta</button>
              <button className="logout-btn" onClick={handleLogout}>Cerrar sesión</button>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
}

export default Profile;