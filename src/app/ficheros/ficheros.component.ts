import { Component, OnInit } from '@angular/core';
import { ListaFicherosService } from './ficheros.service';

@Component({
  selector: 'app-ficheros',
  templateUrl: './ficheros.component.html',
  styleUrls: ['./ficheros.component.css']
})
export class FicherosComponent implements OnInit {

  ficheros: any[]=[];

  constructor(private listaFicherosService: ListaFicherosService) { }

  ngOnInit(): void {
    this.listaFicheros();
  }

  listaFicheros(): void {
    this.listaFicherosService.ficheros().subscribe(
      data => {
        this.ficheros = data;
        
      },
      err => {
        console.log(err);
      }
    );
  }//listaProyectos

}
