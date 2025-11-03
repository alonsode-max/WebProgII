export const getAllQuests = async () => {
    const data = await fetch("http://localhost:5000/api/quest");
    const respJson = await data.json();
    return respJson.data;
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
    console.log(data)
    //verificar que devuelva data completa
    return { success: true, ...data };

    } catch (error) {
        console.error("Error en postLogin:", error);
    return { success: false, status: 500 };
    }

}
