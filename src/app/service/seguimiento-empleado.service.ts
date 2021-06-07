import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { URLServidor } from '../models/url-servidor';

@Injectable({
  providedIn: 'root'
})

export class SeguimientoEmpleadoService {

  rutaLocal = 'http://localhost:8080/';
  rutaServidor: URLServidor;

  constructor(
    private httpClient: HttpClient
    ) { }


  empleados(id: string): Observable<any> {
    return this.httpClient.get<any>(this.rutaLocal + 'api/empleados/'+id);
  }

  jornadas(id:string): Observable<any[]> {
    return this.httpClient.get<any[]>(this.rutaLocal + 'api/jornada/'+id);
  }

  
  baja(id:string): Observable<any[]> {
    return this.httpClient.put<any[]>(this.rutaLocal + 'api/empleados/baja/'+id, null);
  }

  alta(id:string): Observable<any[]> {
    return this.httpClient.put<any[]>(this.rutaLocal + 'api/empleados/alta/'+id, null);
  }
}
