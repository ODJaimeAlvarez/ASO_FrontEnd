import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLServidor } from '../models/url-servidor';
import { Proyectos } from '../models/proyectos';
import { proyectoNuevo } from '../models/proyecto-nuevo';

@Injectable({
  providedIn: 'root'
})

export class ListaProyectosService {

  URL: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.URL = URLServidor.ruta;
  }


  proyectos(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.URL + 'api/proyecto');
  }//proyectos

  actualizarProyectos(id: string, proyecto: Proyectos) {
    console.log(proyecto);
    return this.httpClient.put<any>(this.URL + 'api/proyecto/' + id, proyecto);
  }//actualizarProyectos

  obtenerProyectos(id: string): Observable<any> {
    return this.httpClient.get<any[]>(this.URL + 'api/proyecto/' + id);
  }//obtenerProyectos

  empleados(): Observable<any> {
    return this.httpClient.get<any[]>(this.URL + 'api/empleados/empleados')
  }//empleados

  clientes(): Observable<any> {
    return this.httpClient.get<any>(this.URL + 'api/cliente');
  }//clientes

  guardarProyecto(proyecto: proyectoNuevo) {
    return this.httpClient.post<any>(this.URL + 'api/proyecto', proyecto)
  }//guardarProyecto

}
