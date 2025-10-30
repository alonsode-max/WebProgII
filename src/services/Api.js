export const getAllQuests = async () => {
    const data = await fetch("http://localhost:5000/api/quest");
    const respJson = await data.json();
    return respJson.data;
};