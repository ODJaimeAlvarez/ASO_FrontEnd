import { Component, OnInit } from '@angular/core';
import { ListaFicherosService } from '../service/lista-ficheros.service';
import { Ficheros } from '../models/ficheros';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-lista-ficheros',
  templateUrl: './lista-ficheros.component.html',
  styleUrls: ['./lista-ficheros.component.scss']
})

export class ListaFicherosComponent implements OnInit {

  ficheros: Ficheros[];
  filterPosts = '';
  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20];
  selectedFiles: FileList;
  currentFileUpload: File;

  constructor(
    private listaFicherosService: ListaFicherosService,
    private route: ActivatedRoute,
    public datepipe: DatePipe
  ) { }

  ngOnInit() {
    this.listaFicheros();
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1; //paginator empieza por 0
  }//handlePage

  listaFicheros(): void {
    let id = this.route.snapshot.paramMap.get("id");
    this.listaFicherosService.ficheros(id).subscribe(
      data => {
        this.ficheros = data;
        for (let i = 0; i < this.ficheros.length; i++) {
          this.ficheros[i].formato = this.datepipe.transform(this.ficheros[i].fecha_mod, 'yyyy-MM-dd');
        }
      },
      err => {
        console.log(err);
      }
    );
  }//listaFicheros

  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.subirArchivo();
  }//selectFile

  editaFile(id: string, event) {
    this.selectedFiles = event.target.files;
    this.editarArchivos(id);
  }//editaFile

  subirArchivo() {
    this.currentFileUpload = this.selectedFiles.item(0);
    let id = this.route.snapshot.paramMap.get("id");
    this.listaFicherosService.subir(id, this.currentFileUpload).subscribe(event => {
      window.location.reload();
    });
    this.selectedFiles = undefined;
  }//subirArchivo

  descargarArchivo(fichero: Ficheros): void {
    this.listaFicherosService.descargar(fichero.id).subscribe(
      event => {
        saveAs(event, fichero.nombre);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }//descargarArchivo

  editarArchivos(id: string) {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.listaFicherosService.editar(id, this.currentFileUpload).subscribe(event => {
      window.location.reload();
    });
    this.selectedFiles = undefined;
  }//editarArchivos
}