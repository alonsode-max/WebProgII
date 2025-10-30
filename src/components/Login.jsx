import { useContext,useState } from "react"
import { UserContext } from '../context/UserContext'
import { useNavigate } from "react-router-dom"

const initial_state = {
  email:"",
  password:""
}

function Login({setUserLogin}) {
  const {login,logout} = useContext(UserContext)
  const [user,setUser] = useState(initial_state)

    //const navigate = useNavigate()
    const [error, setError] = useState("");

    const handleFormData = (ev) => {
        setUser({...user,[ev.target.id]:ev.target.value})
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        if (!user.email || !user.password) {
        setError("rellenar todos los campos")
        return;
        }
        if (!user.email.includes("@") || !user.email.includes(".")) {
        setError("debes incluir @ o '.'")
        return;
        }
        //hacer validacion luego si la contraseña o email existe
        setError("")
        login(user)
        //setUser({email:"",password:""})
    }

    const handleLogout = () =>{
    logout()
  }

   return (
    <>
      <form onSubmit={handleSubmit} >
        <div>
            <label htmlFor="">email</label>
            <input type="email" id='email' onChange={handleFormData} value={user.email}/>
        </div>

        <div>
            <label htmlFor="">contraseña</label>
            <input type="password" id='password' onChange={handleFormData} value={user.password}/>
        </div>

        <div>
            <input type="submit" value="login" />
        </div>
    </form>
    {error && <p>{error}</p>}
    {user ? <button onClick={handleLogout} >salir</button>:null}
    </>
  )
}
export default Login 