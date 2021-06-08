import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLServidor } from '../models/url-servidor';

@Injectable({
  providedIn: 'root'
})

export class GraficosService {

  URL: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.URL = URLServidor.ruta;
  }

  graficoProyectos(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.URL + 'api/informe/estado');
  }//graficoProyectos

  graficoContadorUsuarios(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.URL + 'api/informe/usuarios');
  }//graficoContadorUsuarios

  graficoLogUsuarios(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.URL + 'api/informe/estado');
  }//graficoLogUsuarios
}
