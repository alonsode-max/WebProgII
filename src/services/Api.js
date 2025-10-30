export const getAllQuests = async () => {
    const data = await fetch("http://localhost:5000/api/quest");
    const respJson = await data.json();
    return respJson.data;
};

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