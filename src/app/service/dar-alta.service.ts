import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleados } from '../models/empleados';
import { NuevoEmpleado } from '../models/nuevo_empleado';


@Injectable({
  providedIn: 'root'
})

export class DarAltaService {

  listaURL = 'http://localhost:8080/';

  constructor(
    private httpClient: HttpClient
    ) { }

  darAlta(Empleado: NuevoEmpleado): Observable<any[]> {
    return this.httpClient.post<any[]>(this.listaURL + 'api/empleados/register',Empleado);
  }

}
