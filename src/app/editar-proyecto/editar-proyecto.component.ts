import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clientes } from '../models/clientes';
import { Empleados } from '../models/empleados';
import { Estados, Estado_aceptado, Estado_encurso, Estado_finalizado, Estado_iniciado } from '../models/estados';
import { Proyectos } from '../models/proyectos';
import { ListaProyectosService } from '../service/lista-proyectos.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.scss']
})

export class EditarProyectoComponent implements OnInit {

  constructor(
    private listaProyectosService: ListaProyectosService,
    private router: ActivatedRoute,
    private route: Router
  ) { }

  estadoSelecccionado: Estados;
  estados: Estados[] = [new Estado_iniciado, new Estado_encurso, new Estado_aceptado, new Estado_finalizado];
  proyecto: Proyectos;
  empleados: Empleados[];
  nombre: string;
  descripcion: string;
  empleadosAsignados: Empleados[] = [];
  clientes: Clientes[];
  cliente: Clientes;
  valor: number;
  formato: string;
  completado: boolean = false;
  formatoEstados: string[] = ["Iniciado", "En curso", "Aceptado", "Finalizado"];
  formatoEstado: string;

  ngOnInit(): void {
    this.proyectoActual();
  }//ngOnInit

  proyectoActual() {
    let id = this.router.snapshot.paramMap.get("id");
    this.listaProyectosService.obtenerProyectos(id).subscribe(
      data => {
        this.proyecto = data;
        this.descripcion = data.descripcion;
        this.nombre = data.nombre;
        switch (this.proyecto.estado.estado) {
          case "INICIADO":
            this.formatoEstado = this.formatoEstados[0];
            break;
          case "EN_CURSO":
            this.formatoEstado = this.formatoEstados[1];
            break;
          case "ACEPTADO":
            this.formatoEstado = this.formatoEstados[2];
            break;
          case "FINALIZADO":
            this.formatoEstado = this.formatoEstados[3];
            break;
        }
      },
      err => {
        console.log(err);
      }
    );
  }//proyectoActual

  editarProyecto() {
    let estado;
    switch (this.formatoEstado) {
      case "Iniciado":
        estado = this.estados[0];
        break;
      case "En curso":
        estado = this.estados[1];
        break;
      case "Aceptado":
        estado = this.estados[2];
        break;
      case "Finalizado":
        estado = this.estados[3];
        break;
    }
    let proyecto = new Proyectos(this.proyecto.nombre, estado, this.descripcion);
    this.listaProyectosService.actualizarProyectos(this.proyecto.id.toString(), proyecto).subscribe(
      data => {
        this.route.navigate(["/proyectos"]);
      },
      err => {
        console.log(err);
      }
    );
  }//editarProyecto
}