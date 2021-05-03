import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class ListaFicherosService {

    listaURL = 'http://localhost:8080/';
  
    constructor(
      private httpClient: HttpClient
      ) { }
  
  
    ficheros(): Observable<any[]> {
      return this.httpClient.get<any[]>(this.listaURL + 'api/proyecto', );
    }
  
  
  
  }
  