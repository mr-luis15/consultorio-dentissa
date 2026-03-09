import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"

export default function NavbarPublico() {
    return (
        <div>
            <nav className="navbar-publico">

                <div className="contenedor-titulo-principal">
                    <Link className="logo-navbar" to="/">Consultorio</Link>
                </div>

                <div className="contenedor-links">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link login" to="/login">Login</Link>
                    
                </div>

            </nav>

            <main className="contenedor-main">
                <Outlet />
            </main>
        </div>
    )
}