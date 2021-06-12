export class NuevoUsuario {
    nombre: string;
    apellido1: string;
    apellido2: string;
    empresa: string;
    telefono: string;
    direccion: string;
    correo: string;
    password: string;

    constructor(nombre: string, apellido1: string, apellido2: string, empresa: string, telefono: string,
        direccion: string, correo: string, password: string) {
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.empresa = empresa;
        this.telefono = telefono;
        this.direccion = direccion;
        this.correo = correo;
        this.password = password;
    }
}