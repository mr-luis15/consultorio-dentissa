import { useState } from "react";
import { iniciar_sesion } from "../services/auth/authService";


export function useAuth() {

    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');



    async function login(credenciales: any) {

        try {

            if (!credenciales.correo || !credenciales.contraseña) {
                return {data: null, error: 'Debes llenar todos los campos'};
            }

            const datos = await iniciar_sesion(credenciales);

            return {data: datos, error: null};

        } catch (error) {
            return {data: null, error: error};
        }
    }


    return { correo, setCorreo, contraseña, setContraseña, login }

}