import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Busqueda } from '../models/busqueda';
import { TokenService } from '../service/token.service';
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
    return this.httpClient.get<any>(this.listaURL + 'api/usuarios/'+id);
  }

}
