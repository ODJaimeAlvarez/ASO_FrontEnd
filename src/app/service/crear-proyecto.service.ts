import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { proyectoNuevo } from '../models/proyecto-nuevo';



@Injectable({
  providedIn: 'root'
})

export class crearProyectoService {

  listaURL = 'http://localhost:8080/';

  constructor(
    private httpClient: HttpClient
    ) { }

  empleados():Observable<any>{
    return this.httpClient.get<any[]>(this.listaURL+ 'api/empleados/empleados')
  }
    
  clientes(): Observable<any> {
    return this.httpClient.get<any>(this.listaURL + 'api/cliente');
  }
 
  guardarProyecto(proyecto:proyectoNuevo){
    return this.httpClient.post<any>(this.listaURL+'api/proyecto',proyecto)
  }

}
