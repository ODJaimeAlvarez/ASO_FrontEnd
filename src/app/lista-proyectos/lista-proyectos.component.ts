import { Component, OnInit } from '@angular/core';
import { ListaProyectosService } from '../service/lista-proyectos.service';
import { TokenService } from '../service/token.service';
import { Proyectos } from '../models/proyectos';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { Estados, Estado_iniciado } from '../models/estados';
import { Empleados } from '../models/empleados';
import { proyectoNuevo } from '../models/proyecto-nuevo';
import { Clientes } from '../models/clientes';

@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styleUrls: ['./lista-proyectos.component.scss']
})

export class ListaProyectosComponent implements OnInit {

  proyectos: Proyectos[];
  completado: boolean = false;
  filterPosts = '';
  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20];
  roles: string[];
  visibilidadDirector: boolean;

  //CREAR PROYECTO
  estado: Estados;
  Proyecto: proyectoNuevo;
  empleados: Empleados[];
  nombre: string = "";
  descripcion: string = "";
  empleadosAsignados: Empleados[] = [];
  clientes: Clientes[];
  cliente: Clientes;

  constructor(
    private listaProyectosService: ListaProyectosService,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.listaProyectos();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'DIRECTOR') {
        this.visibilidadDirector = true;
      }
    });
    this.listaEmpleados();
    this.listaClientes();
  }//ngOnInit

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1; //paginator empieza por 0
  }//handlePage

  accesoFicheros(proyecto: Proyectos) {
    this.router.navigate(["/ficheros", proyecto.id]);
  }//accesoFicheros

  listaProyectos(): void {
    this.listaProyectosService.proyectos().subscribe(
      data => {
        this.proyectos = data;
        for (let i = 0; i < this.proyectos.length; i++) {
          switch (this.proyectos[i].estado.estado) {
            case "INICIADO":
              this.proyectos[i].valor = 25;
              this.proyectos[i].formato = "Iniciado";
              break;
            case "EN_CURSO":
              this.proyectos[i].valor = 50;
              this.proyectos[i].formato = "En curso";
              break;
            case "ACEPTADO":
              this.proyectos[i].valor = 75;
              this.proyectos[i].formato = "Aceptado";
              break;
            case "FINALIZADO":
              this.proyectos[i].valor = 100;
              this.proyectos[i].formato = "Finalizado";
              this.proyectos[i].completado = true;
              break;
          }
        }
      },
      err => {
        console.log(err);
      }
    );
  }//listaProyectos

  editarProyecto(proyecto: Proyectos) {
    console.log(proyecto);
    this.router.navigate(["/editarProyecto", proyecto.id]);
  }//editarProyecto

  crearProyecto() {
    this.Proyecto = {
      nombre: this.nombre,
      descripcion: this.descripcion,
      estado: new Estado_iniciado,
      empleados: this.empleadosAsignados,
      cliente: this.cliente
    }
    console.log(this.Proyecto);
    this.listaProyectosService.guardarProyecto(this.Proyecto).subscribe(
      data => {
        console.log(data);
        window.location.reload();
      },
      err => {
        console.log(err);
      }
    );
  }//crearProyecto

  listaClientes() {
    this.listaProyectosService.clientes().subscribe(
      data => {
        this.clientes = data;
      }
      ,
      err => {
        console.log(err);
      }
    );
  }//listaClientes

  listaEmpleados() {
    this.listaProyectosService.empleados().subscribe(
      data => {
        this.empleados = data;
      }
      ,
      err => {
        console.log(err);
      }
    );
  }//listaEmpleados

  seleccionado(empleado: Empleados): void {
    let emp = this.empleadosAsignados.find(x => x.id == empleado.id);
    if (emp == undefined || emp == null) {
      this.empleadosAsignados.push(empleado);
    } else {
      this.empleadosAsignados.splice(this.empleadosAsignados.indexOf(empleado));
    }
    console.log(this.empleadosAsignados)
  }//seleccionado

  seleccionadoCliente(cliente: Clientes): void {
    this.cliente = cliente;
    console.log(this.cliente)
  }//seleccionadoCliente
}
