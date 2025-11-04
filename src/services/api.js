export const getAllQuests = async () => {
    const data = await fetch("http://localhost:3005/api/quest/quest");
    const respJson = await data.json();
    console.log(respJson)
    return respJson.data;
};

export const getQuestById = async (id) => {
    const data = await fetch(`http://localhost:3005/api/quest/quest/${id} `);
    const respJson = await data.json();
    return respJson.data;
};

export const getUserById = async (id) => {
    const data = await fetch(`http://localhost:3005/api/user/${id} `);
    const respJson = await data.json();
    return respJson.data[0];
};

export const updateUser = async (user, id) => {
    const data = await fetch(`http://localhost:3005/api/user/edit/${id} `, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    const respJson = await data.json()
    return respJson

}

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
        console.log(data)
        //verificar que devuelva data completa
        return ({ success: true, token: data.token, id: data.id });

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