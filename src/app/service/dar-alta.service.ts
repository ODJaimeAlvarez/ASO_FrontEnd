import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NuevoEmpleado } from '../models/nuevo-empleado';
import { URLServidor } from '../models/url-servidor';

@Injectable({
  providedIn: 'root'
})

export class DarAltaService {

  URL: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.URL = URLServidor.ruta;
  }

  darAlta(Empleado: NuevoEmpleado): Observable<any[]> {
    return this.httpClient.post<any[]>(this.URL + 'api/empleados/register', Empleado);
  }//darAlta

}
