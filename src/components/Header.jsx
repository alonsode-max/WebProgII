import { Link } from "react-router-dom"

function Header() {
  return (
    <nav>
        <ul className="head">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Perfil</Link></li>
            <li><Link to="/misiones">Misiones</Link></li>
            <li><Link to="/">Admin</Link></li>
            <li><Link to="/">Misiones</Link></li>
            <li><Link to="/">Registrarse</Link></li>
        </ul>
    </nav>
  )
}

export default Header