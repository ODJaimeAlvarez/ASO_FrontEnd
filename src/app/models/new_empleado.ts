import { Rol } from "./rol";

export class NewEmpleado{ 
        nombre: string;
        apellido1: string;
        apellido2: string;
        correo: string;        
        cargo: string;
        telefono: string;
        direccion: string;
        pais: string;
        ciudad: string;
        CP: string;
        descripcion?: string;
        password:string;
        rol:Rol;
}