export class Rol {
    id: number
    rol: string
}

export class Rol_empleado extends Rol {
    id: number = 3
    rol: string = "EMPLEADO"
}

export class Rol_director extends Rol {
    id: number = 1
    rol: string = "DIRECTOR"
}