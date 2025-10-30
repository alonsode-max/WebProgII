const pool = require("../config/conex.js")

//register
const insertUser = async(user) =>{
    const {name,surname,username,email,password} = user
    const insert = "insert into user(name,surname,username,email,password) value(?,?,?,?,?)"
    const[result] = await pool.query(insert,[name,surname,username,email,password])
    return result
}

// login 
const login = async(user) =>{
    const {email,password,rol} = user
    const getUser = "select from user("
}

// agarrar email
const selectByEmail = async (email) => {
    const sql = "SELECT * FROM user WHERE email =  ?";
    const [result] = await pool.query(sql, [email])
    return result;
}


module.exports = {insertUser,selectByEmail}