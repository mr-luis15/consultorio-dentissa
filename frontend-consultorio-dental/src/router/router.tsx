import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/Sobre-nosotros"
import Login from "../pages/Login"
import NavbarPublico from "../layouts/public_navbar"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<NavbarPublico />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}