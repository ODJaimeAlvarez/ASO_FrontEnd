import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { URLServidor } from '../models/url-servidor';

@Injectable({
  providedIn: 'root'
})

export class ListaProyectosService {

  rutaLocal = 'http://localhost:8080/';
  rutaServidor: URLServidor;

  constructor(
    private httpClient: HttpClient
    ) { }


  proyectos(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.rutaLocal + 'api/proyecto');
  }

}
