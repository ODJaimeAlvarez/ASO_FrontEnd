import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleados } from '../models/empleados';
import { NuevoEmpleado } from '../models/nuevo_empleado';
import { URLServidor } from '../models/url-servidor';


@Injectable({
  providedIn: 'root'
})

export class DarAltaService {

  rutaLocal = 'http://localhost:8080/';
  rutaServidor: URLServidor;

  constructor(
    private httpClient: HttpClient
    ) { }

  darAlta(Empleado: NuevoEmpleado): Observable<any[]> {
    return this.httpClient.post<any[]>(this.rutaLocal + 'api/empleados/register',Empleado);
  }

}
