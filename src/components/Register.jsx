import React, { useState, useEffect } from 'react'

function Register() {
    const [formData, setFormData] = useState({
        nombre: "",
        nombre_usuario:"",
        apellido: "",
        email: "",
        password: ""
        /*repeatPass:""*/
    })

    const [serverMessage, setServerMessage] = useState("");
    const [status, setStatus] = useState("");

    const insertUser = async (formData) => {
        console.log(formData)
        fetch("http://localhost:3005/api/user/register", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((resp) => resp.json()
                .then((data) => ({ ok: resp.ok, data })))
            .then(({ ok, data }) => {
                if (ok && data.success) {
                    setStatus("success");
                    setServerMessage(data.msg || "Registro completado correctamente.");
                } else {
                    setStatus("error");
                    setServerMessage(data.msg || "Error al registrar el usuario.");
                }
            })
            .catch((error) => {
                console.error("Error al conectar con el servidor:", error);
                setStatus("error");
                setServerMessage("Error al conectar con el servidor.");
            });
    }

    const handleFormData = (ev) => {
        setFormData({ ...formData, [ev.target.id]: ev.target.value })
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        //hacer validaciones
        if (!formData.nombre || !formData.apellido) {
            alert("Debes de poner tu nombre,apellido y username correctamente. ")
            return
        }
        if (!email || !password) {
            alert("Por favor, completa todos los campos(email y contraseña).");
            return
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert("El formato del correo no es válido");
            return
        }
        if (password.length < 4) {
            alert("La contraseña debe tener al menos 4 caracteres");
            return
        }
        //llevar info de formdata a la bd
        insertUser(formData)
    }

    return (
        <>
            <h2>Registrar nueva cuenta</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" id='nombre' onChange={handleFormData} value={formData.nombre} />
                </div>
                <div>
                    <label htmlFor="">Nombre de usuario</label>
                    <input type="text" id='nombre_usuario' onChange={handleFormData} value={formData.nombre_usuario} />
                </div>               
                <div>
                    <label htmlFor="">Apellidos</label>
                    <input type="text" id='apellido' onChange={handleFormData} value={formData.apellido} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" id='email' onChange={handleFormData} value={formData.email} />
                </div>
                <div>
                    <label htmlFor="">Contraseña</label>
                    <input type="password" id='password' onChange={handleFormData} value={formData.password} />
                </div>
                <div>
                    <input type="submit" value="Register" />
                </div>
            </form>

            <div>
                {serverMessage && (
                    <p style={{ color: status === "success" ? "green" : "red" }}>
                        {serverMessage}
                    </p>
                )}
            </div>

        </>
    )
}

export default Register
