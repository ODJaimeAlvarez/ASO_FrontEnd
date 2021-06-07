import { isConstructorDeclaration } from 'typescript';
import { Estados } from './estados';

export class Proyectos {
    id: number;
    nombre: string;
    estado: Estados;
    descripcion: string;
    valor: number;
    formato: string;
    completado: boolean=false;

    constructor(nombre:string,estado:Estados,descripcion:string){
        this.nombre=nombre;
        this.estado=estado;
        this.descripcion=descripcion;
    }
}
