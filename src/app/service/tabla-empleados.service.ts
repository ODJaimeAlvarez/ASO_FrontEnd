import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLServidor } from '../models/url-servidor';

@Injectable({
  providedIn: 'root'
})

export class TablaEmpleadosService {

  URL: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.URL = URLServidor.ruta;
  }

  empleados(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.URL + 'api/empleados');
  }//empleados
}