import { Component, OnInit } from '@angular/core';
import { ListaProyectosService } from '../service/lista-proyectos.service';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import { TokenService } from '../service/token.service';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { Proyectos } from '../models/proyectos';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';


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
  page_number: number =1;
  pageSizeOptions = [5, 10, 20];
  roles: string[];
  visibilidadDirector: boolean;
  constructor(
    private listaService: ListaProyectosService,
    private router: Router,
    private tokenService: TokenService
  
  ) { }

  ngOnInit() {
    this.listaProyectos();
    this.roles= this.tokenService.getAuthorities();
    this.roles.forEach(rol=> {
      if(rol === 'DIRECTOR') {
        this.visibilidadDirector= true;
      }
    });
   
  }

  agregarProyecto(){
    this.router.navigate(["/crearProyecto"]);
  }
  

  handlePage(e: PageEvent) {
    this.page_size =e.pageSize;
    this.page_number =e.pageIndex+1; //paginator empieza por 0
  }
  
  prueba(proyecto: Proyectos) {
    this.router.navigate(["/ficheros", proyecto.id]);
  }

  listaProyectos(): void {
    this.listaService.proyectos().subscribe(
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


  editarProyecto(proyecto:Proyectos){
    console.log(proyecto);
    this.router.navigate(["/editarProyecto",proyecto.id]);
  }

}
