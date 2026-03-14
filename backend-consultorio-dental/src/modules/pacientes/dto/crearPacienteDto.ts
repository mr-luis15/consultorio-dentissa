import { Paciente } from "@prisma/client";

export interface crearPacienteDto {
    nombre: string;
    apellido: string;
    telefono: string;
    direccion: string;
    fecha_nacimiento: Date;
    telefono_emergencia?: string;
    usuario: {
        id: number
    }
}