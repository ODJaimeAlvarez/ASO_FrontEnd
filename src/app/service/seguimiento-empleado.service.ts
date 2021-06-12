import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLServidor } from '../models/url-servidor';

@Injectable({
  providedIn: 'root'
})

export class SeguimientoEmpleadoService {

  URL: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.URL = URLServidor.ruta;
  }

  empleados(id: string): Observable<any> {
    return this.httpClient.get<any>(this.URL + 'api/empleados/' + id);
  }//empleados

  jornadas(id: string): Observable<any[]> {
    return this.httpClient.get<any[]>(this.URL + 'api/jornada/' + id);
  }//jornadas

  baja(id: string): Observable<any[]> {
    return this.httpClient.put<any[]>(this.URL + 'api/empleados/baja/' + id, null);
  }//baja

  alta(id: string): Observable<any[]> {
    return this.httpClient.put<any[]>(this.URL + 'api/empleados/alta/' + id, null);
  }//alta
}
