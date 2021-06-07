import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLServidor } from '../models/url-servidor';

@Injectable({
  providedIn: 'root'
})
export class GraficosService {

  rutaLocal = 'http://localhost:8080/';
  rutaServidor: URLServidor;

  constructor(
    private httpClient: HttpClient
  ) { }

  graficoProyectos(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.rutaLocal + 'api/informe/estado');
  }//graficoProyectos

  graficoContadorUsuarios(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.rutaLocal + 'api/informe/usuarios');
  }//graficoContadorUsuarios

  graficoLogUsuarios(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.rutaLocal + 'api/informe/estado');
  }//graficoLogUsuarios
}
