import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infrastructure/prisma/prisma.service";
import { crearPacienteDto } from "../dto/crearPacienteDto";

@Injectable()
export class pacientesRepository {

    constructor(private prisma: PrismaService) {}


    async obtenerTodos() {
        return await this.prisma.paciente.findMany();
    }


    async obtenerPacientePorId(id: number) {
        return await this.prisma.paciente.findUnique({
            where: {
                id: id
            }
        });
    }


    async crearPaciente(crearPacienteDto : crearPacienteDto) {
        return await this.prisma.paciente.create({
            data: {
                nombre: crearPacienteDto.nombre,
                apellido: crearPacienteDto.apellido,
                direccion: crearPacienteDto.apellido,
                fecha_nacimiento: crearPacienteDto.fecha_nacimiento,
                telefono: crearPacienteDto.telefono,
                telefono_emergencia: crearPacienteDto.telefono_emergencia,
                usuario_id: crearPacienteDto.usuario.id
            }
        });
    }


}