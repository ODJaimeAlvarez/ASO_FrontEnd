import { Estados } from './estados';

export class Proyectos {
    id: number;
    nombre: string;
    estado: Estados;
    descripcion: string;
    valor: number;
    formato: string;
    completado: boolean=false;
}