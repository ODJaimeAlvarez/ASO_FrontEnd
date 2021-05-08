import { Component, OnInit } from '@angular/core';
import { ListaProyectosService } from './lista-proyectos.service';
import { Busqueda } from '../models/busqueda';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import { TokenService } from '../service/token.service';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { Proyectos } from '../models/proyectos';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styleUrls: ['./lista-proyectos.component.scss']
})
export class ListaProyectosComponent implements OnInit {

  proyectos: Proyectos[];
  completado: boolean= false;
  filterPosts='';
  public page: number;

  constructor(
    private listaService: ListaProyectosService,
    private router: Router
    ) { }

  ngOnInit() {
      this.listaProyectos();
  }

  prueba(proyecto: Proyectos){
      this.router.navigate(["/ficheros", proyecto.id]);
  }
  
  listaProyectos(): void {
    this.listaService.proyectos().subscribe(
      data => {
        this.proyectos = data;
        for (let i=0; i<this.proyectos.length; i++) {
          switch(this.proyectos[i].estado.estado){
              case "INICIADO": 
                this.proyectos[i].valor= 25;
                this.proyectos[i].formato="Iniciado";
                break;
                case "EN_CURSO": 
                this.proyectos[i].valor= 50;
                this.proyectos[i].formato="En curso"; 
                break;
                case "ACEPTADO": 
                this.proyectos[i].valor= 75;
                this.proyectos[i].formato="Aceptado";
                break;
                case "FINALIZADO": 
                this.proyectos[i].valor= 100;
                this.proyectos[i].formato="Finalizado";
                this.proyectos[i].completado=true;
                break;
          }
              }
      },
      err => {
        console.log(err);
      }
    );
  }//listaProyectos

}
