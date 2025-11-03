export const getAllQuests = async () => {
    const data = await fetch("http://localhost:5000/api/quest");
    const respJson = await data.json();
    return respJson.data;
};

export const getQuestById = async (id) => {
    const data = await fetch(`http://localhost:5000/api/quest/${id} `);
    const respJson = await data.json();
    return respJson.data;
};

export const getUserById = async (id) => {
    const data = await fetch(`http://localhost:5000/api/user/${id} `);
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
    const data = await fetch(`http://localhost:3005/api/user/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    const respJson = await data.json()
    return respJson

}

export const postRel = async (idQuest, idUser) => {
    const body = {
        "quests_idQuests": idQuest,
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