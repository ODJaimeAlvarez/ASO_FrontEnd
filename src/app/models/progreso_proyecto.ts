export class Progreso{
    id:number
    progreso:string
}

export class Progreso_iniciado extends Progreso{
    id:number=1
    progreso:string= "INICIADO"
}

export class Progreso_encurso extends Progreso{
    id:number=2
    progreso:string= "EN CURSO"
}
export class Progreso_aceptado extends Progreso{
    id:number=3
    progreso:string= "INICIADO"
}

export class Progreso_finalizado extends Progreso{
    id:number=4
    progreso:string= "FINALIZADO"
}