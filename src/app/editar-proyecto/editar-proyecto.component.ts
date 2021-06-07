import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clientes } from '../models/clientes';
import { Empleados } from '../models/empleados';
import { Estados, Estado_aceptado, Estado_encurso, Estado_finalizado, Estado_iniciado } from '../models/estados';
import { Proyectos } from '../models/proyectos';
import { editarProyectoService } from '../service/editarProyecto.service';
import { TablaEmpleadosService } from '../tabla-empleados/tabla-empleados.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.scss']
})
export class EditarProyectoComponent implements OnInit {

  constructor(private listaService:editarProyectoService,
    private listaEmpleadoService: TablaEmpleadosService,
    private router: ActivatedRoute,
    private route :Router) { }

  
  estadoSelecccionado:Estados;
  estados: Estados[]=[new Estado_iniciado,new Estado_encurso,new Estado_aceptado,new Estado_finalizado];
  proyecto: Proyectos;
  empleados:Empleados[];
  nombre:string="";
  descripcion:string="";
  empleadosAsignados:Empleados[]=[];
  clientes:Clientes[];
  cliente:Clientes;
  valor:number;
  formato:string;
  completado:boolean=false;

  ngOnInit(): void {
    console.log(this.estados)
    this.proyectoActual();
  }

  cambiarProyecto(){

    switch (this.proyecto.estado.estado) {
      case "INICIADO":
        this.valor = 25;
        this.formato = "Iniciado";
        break;
      case "EN_CURSO":
        this.valor = 50;
        this.formato = "En curso";
        break;
      case "ACEPTADO":
        this.valor = 75;
        this.formato = "Aceptado";
        break;
      case "FINALIZADO":
        this.valor = 100;
        this.formato = "Finalizado";
        this.completado = true;
        break;
    }
    this.proyecto={
      id:this.proyecto.id,
      nombre:this.nombre,
      descripcion:this.descripcion,
      estado:this.proyecto.estado,
      valor:this.valor,
      formato:this.formato,
      completado:this.completado
    }
    console.log(this.proyecto);
  }


  


  
  proyectoActual() {

    let id = this.router.snapshot.paramMap.get("id");
    this.listaService.obtenerProyectos(id).subscribe(
      data => {
        this.proyecto=data;
        console.log(data);
        this.descripcion=data.descripcion;
        this.nombre=data.nombre;
        
        console.log(this.estadoSelecccionado);
  },
  err => {
    console.log(err);
  }
    );
    
  }

  editarProyecto(){
    
    let estado=this.estados.find((x)=>x.estado==this.proyecto.estado.estado);

    let proyecto = new Proyectos(this.proyecto.nombre,estado,this.descripcion);
    console.log(this.proyecto);
    this.listaService.actualizarProyectos(this.proyecto.id.toString(),proyecto).subscribe(
      data => {
        console.log(data);
        this.route.navigate(["/proyectos"]);
      },
      err => {
        console.log(err);
      }
    );
  }

}
