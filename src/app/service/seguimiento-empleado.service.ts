import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Busqueda } from '../models/busqueda';
import { TokenService } from './token.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})

export class SeguimientoEmpleadoService {

  listaURL = 'http://localhost:8080/';

  constructor(
    private httpClient: HttpClient
    ) { }


  empleados(id: string): Observable<any> {
    return this.httpClient.get<any>(this.listaURL + 'api/empleados/'+id);
  }

  jornadas(id:string): Observable<any[]> {
    return this.httpClient.get<any[]>(this.listaURL + 'api/jornada/'+id);
  }

  
  baja(id:string): Observable<any[]> {
    return this.httpClient.put<any[]>(this.listaURL + 'api/empleados/baja/'+id, null);
  }

  alta(id:string): Observable<any[]> {
    return this.httpClient.put<any[]>(this.listaURL + 'api/empleados/alta/'+id, null);
  }
}
