// services/userService.js
import { post } from "./api";





export async function iniciar_sesion(credenciales : object) {
    return post('/usuarios', credenciales);
}






export async function cerrar_session() {
    
}