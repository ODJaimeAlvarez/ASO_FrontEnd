import { Component, OnInit } from '@angular/core';
import { ListaFicherosService } from './lista-ficheros.service';
import { Ficheros } from '../models/ficheros';
import { DatePipe } from '@angular/common';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lista-ficheros',
  templateUrl: './lista-ficheros.component.html',
  styleUrls: ['./lista-ficheros.component.scss']
})
export class ListaFicherosComponent implements OnInit {

  ficheros: Ficheros[];
  

  constructor(
    private listaService: ListaFicherosService,
    private route: ActivatedRoute,
    public datepipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.listaFicheros();
  }

  listaFicheros(): void {
    let id = this.route.snapshot.paramMap.get("id");
    
    this.listaService.ficheros(id).subscribe(
      data => {
        this.ficheros = data;
        for(let i=0; i<this.ficheros.length; i++) {
          this.ficheros[i].formato= this.datepipe.transform(this.ficheros[i].fecha_mod, 'yyyy-MM-dd');
        }
        
      },
      err => {
        console.log(err);
      }
    );
  }//listaProyectos

}
