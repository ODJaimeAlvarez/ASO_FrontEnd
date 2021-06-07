export class Estados {
    estado: string;
    code: string;
}

export class Estado_iniciado extends Estados{
    estado:string="INICIADO"
    code:string="iniciado"
}

export class Estado_encurso extends Estados{
    estado:string="EN_CURSO"
    code:string="en_curso"
}
export class Estado_aceptado extends Estados{
    estado:string="ACEPTADO"
    code:string="aceptado"
}

export class Estado_finalizado extends Estados{
    estado:string="FINALIZADO"
    code:string="finalizado"
}