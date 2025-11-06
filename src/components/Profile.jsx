import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import Header from "../components/Header";
import { updateUser, deleteUser } from "../services/api";
import "../css/Profile.css"

function Profile() {
  const { userLog, logout, setUserLog } = useContext(UserContext);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(userLog || {});

  const handleLogout = () => logout();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = async () => {
    const resp = await updateUser(formData, userLog.id);
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
      const resp = await deleteUser(userLog.id);
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
              <img
                src={userLog.avatar}
                alt="Foto de perfil"
                className="profile-avatar"
              />
              <h2 className="profile-username">
                {userLog.nombre_usuario || "Usuario sin nombre"}
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
                  <p><strong>ID:</strong> {userLog.id}</p>
                  <p><strong>Nombre:</strong> {userLog.nombre}</p>
                  <p><strong>Correo:</strong> {userLog.email}</p>
                  <p><strong>Rol:</strong> {userLog.rol}</p>
                  <p><strong>Nivel:</strong> {userLog.nivel}</p>
                  <p><strong>XP:</strong> {userLog.puntos_xp}</p>
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