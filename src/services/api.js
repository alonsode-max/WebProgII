export const getAllQuests = async () => {
  const data = await fetch("http://localhost:3005/api/quest/quest");
  const respJson = await data.json();
  console.log(respJson)
  return respJson.data;
};

export const getFilteredQuests = async (id) => {
  const data = await fetch(`http://localhost:3005/api/quest/questF/${id} `);
  const respJson = await data.json();
  return respJson.data;
};

export const getQuestById = async (id) => {
  const data = await fetch(`http://localhost:3005/api/quest/quest/${id} `);
  const respJson = await data.json();
  return respJson.data;
};

export const getUserById = async (id) => {
  const data = await fetch(`http://localhost:3005/api/user/obtain/${id} `);
  const respJson = await data.json();
  return respJson.data[0];
};

export const updateUser = async (user, id) => {
  try {
    const response = await fetch(`http://localhost:3005/api/user/edit/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (error) {
    console.error("Error en updateUser:", error);
    return { success: false, msg: "Error al actualizar usuario" };
  }
};

export const postLogin = async (user) => {
  try {
    const response = await fetch(`http://localhost:3005/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    if (!response.ok) {
      return { success: false, status: response.status };
    }
    const data = await response.json();
    return ({ success: true, token: data.token, user: data.user, id: data.user.id });


  } catch (error) {
    console.error("Error en postLogin:", error);
    return { success: false, status: 500 };
  }
}

export const postRel = async (idQuests, idUser) => {
  const body = {
    "quests_idQuests": idQuests,
    "users_idUsers": idUser
  }
  const data = await fetch(`http://localhost:3005/api/user/relation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
  const respJson = await data.json()
  return respJson
}

export const getLeaderBoard = async (type = "top") => {
  try {
    const response = await fetch(`http://localhost:3005/api/user/LeaderBoard?type=${type}`);
    const data = await response.json();
    return { success: data.success, data: data.data };
  } catch (error) {
    console.error("Error al obtener el LeaderBoard:", error);
    return { success: false, msg: "Error de conexión" };
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await fetch(`http://localhost:3005/api/user/delete/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    return { success: false, msg: "Error de conexión" };
  }
};