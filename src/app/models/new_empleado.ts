import { Rol } from "./rol";

export interface NewEmpleado{

       
        nombre: string;
        apellido1: string;
        apellido2: string;
        correo: string;        
        cargo: string;
        telefono: string;
        direccion: string;
        descripcion?: string;
        password:string;
        rol:Rol
        
    
}