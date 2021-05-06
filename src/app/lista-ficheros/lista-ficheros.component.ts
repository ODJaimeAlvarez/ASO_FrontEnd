import { Component, OnInit } from '@angular/core';
import { ListaFicherosService } from './lista-ficheros.service';
import { Ficheros } from '../models/ficheros';
import { DatePipe } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { saveAs } from 'file-saver';



@Component({
  selector: 'app-lista-ficheros',
  templateUrl: './lista-ficheros.component.html',
  styleUrls: ['./lista-ficheros.component.scss']
})
export class ListaFicherosComponent implements OnInit {

  ficheros: Ficheros[];
  filterPosts='';
  show: boolean=false;
  mostrarMorado: boolean=false;

  selectedFiles: FileList;
  currentFileUpload: File;

  constructor(
    private listaService: ListaFicherosService,
    private route: ActivatedRoute,
    public datepipe: DatePipe
  ) { }

  ngOnInit() {
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

  selectFile(id:string, event) {
    console.log(event.target.files);
    this.selectedFiles = event.target.files;
    this.editarArchivos(id);
  }
  
  uploadFile(event) {
    console.log(event.target.files);
    this.selectedFiles = event.target.files;
    this.subirArchivo();
  }


  subirArchivo() {
    this.currentFileUpload = this.selectedFiles.item(0);
    let id = this.route.snapshot.paramMap.get("id");

    this.listaService.subir(id, this.currentFileUpload).subscribe(event => {
        console.log('Fichero subido correctamente');
        window.location.reload();
    });

    this.selectedFiles= undefined;
  }//upload

  descargarArchivo(fichero: Ficheros): void {
    this.listaService.descargar(fichero.id).subscribe(
      event => {
        saveAs(event, fichero.nombre);
        console.log('se ha descargado');
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  /*editarArchivos(id: number, fichero: File): void {
    this.listaService.editar(id, fichero).subscribe(
      event => {
        console.log('se ha editado');
        window.location.reload();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }*/

  editarArchivos(id: string) {
    this.currentFileUpload = this.selectedFiles.item(0);

    this.listaService.editar(id, this.currentFileUpload).subscribe(event => {
        console.log('Fichero subido correctamente');
        window.location.reload();
    });

    this.selectedFiles= undefined;
  }

}
