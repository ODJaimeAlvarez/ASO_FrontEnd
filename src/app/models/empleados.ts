import { FotoPerfil } from './fotoPerfil';

export class Empleados {
    id?: string;
    nombre: string;
    apellido1: string;
    apellido2: string;
    correo: string;
    activo: boolean;
    cargo: string;
    telefono: string;
    direccion: string;
    descripcion: string;
    pais: string;
    ciudad: string;
    CP: string;
    fotoPerfil: FotoPerfil;

    constructor(nombre: string, apellido1: string, apellido2: string, correo: string, activo: boolean, cargo: string,
        telefono: string, direccion: string, descripcion: string, pais: string, ciudad: string, CP: string) {
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.correo = correo;
        this.activo = activo;
        this.cargo = cargo;
        this.telefono = telefono;
        this.direccion = direccion;
        this.descripcion = descripcion;
        this.pais = pais;
        this.ciudad = ciudad;
        this.CP = CP;
    }
}

