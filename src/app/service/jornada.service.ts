import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLServidor } from '../models/url-servidor';


@Injectable({
  providedIn: 'root'
})

export class ListaJornadaService {

  rutaLocal = 'http://localhost:8080/';
  rutaServidor: URLServidor;

  constructor(
    private httpClient: HttpClient
  ) {}

  jornadas(): Observable<any> {
    return this.httpClient.post<any>(this.rutaLocal + 'api/jornada/jornadaManager',{});
  }

  isIniciada():Observable<any>{
    return this.httpClient.get<any>(this.rutaLocal+ 'api/jornada/isIniciada');
  }
}
