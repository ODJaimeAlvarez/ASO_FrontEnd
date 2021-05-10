import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Busqueda } from '../models/busqueda';
import { TokenService } from './token.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})

export class ListaProyectosService {

  listaURL = 'http://localhost:8080/';

  constructor(
    private httpClient: HttpClient
    ) { }


  proyectos(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.listaURL + 'api/proyecto', );
  }

}
