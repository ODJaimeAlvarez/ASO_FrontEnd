import { Component, OnInit } from '@angular/core';
import { ListaProyectosService } from './lista-proyectos.service';
import { Busqueda } from './busqueda';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styleUrls: ['./lista-proyectos.component.scss']
})
export class ListaProyectosComponent implements OnInit {

  proyectos: any[] = [];

  //PRUEBA
  listaBusqueda: Busqueda = {
    nombre: '', //aquí meto las busquedas
    progreso: '',
    descripcion: ''
  }


  constructor(
    private listaService: ListaProyectosService
    ) { }

  ngOnInit() {
  
      this.listaProyectos();
      //PRUEBA this.busquedaProyectos();
    
  }

  listaProyectos(): void {
    this.listaService.proyectos().subscribe(
      data => {
        this.proyectos = data;
        
      },
      err => {
        console.log(err);
      }
    );
  }//listaProyectos

  //PRUEBA
  busquedaProyectos(): void {
    this.listaService.busquedaProyectos(this.listaBusqueda).subscribe(
      data => {
        this.proyectos = data; 
      },
      err => {
        console.log(err);
      }
    );
  }//listaDTO()

}
