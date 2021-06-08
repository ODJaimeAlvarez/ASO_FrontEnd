import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLServidor } from '../models/url-servidor';

@Injectable({
  providedIn: 'root'
})

export class ListaJornadaService {

  URL: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.URL = URLServidor.ruta;
  }

  jornadas(): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'api/jornada/jornadaManager', {});
  }//jornadas

  isIniciada(): Observable<any> {
    return this.httpClient.get<any>(this.URL + 'api/jornada/isIniciada');
  }//isIniciada
}
