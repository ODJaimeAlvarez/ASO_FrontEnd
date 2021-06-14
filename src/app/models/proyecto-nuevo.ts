import { Clientes } from "./clientes";
import { Empleados } from "./empleados";
import { Estados } from "./estados";

export class ProyectoNuevo {
    nombre: string;
    descripcion: string;
    estado: Estados;
    empleados: Empleados[];
    cliente: Clientes;
}