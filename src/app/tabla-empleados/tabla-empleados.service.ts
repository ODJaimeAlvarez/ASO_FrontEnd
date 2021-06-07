import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleados } from '../models/empleados';
import { URLServidor } from '../models/url-servidor';

@Injectable({
  providedIn: 'root'
})
export class TablaEmpleadosService {

  rutaLocal = 'http://localhost:8080/';
  rutaServidor: URLServidor;

  constructor(private httpClient: HttpClient) { }

  empleados(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.rutaLocal + 'api/empleados');
  }
}