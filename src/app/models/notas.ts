export class Notas {
    id?: number;
    nombre: string;
    nota: string;

    constructor(nombre: string, nota: string) {
        this.nombre = nombre;
        this.nota = nota;
    }
}