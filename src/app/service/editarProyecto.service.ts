import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyectos } from '../models/proyectos';



@Injectable({
  providedIn: 'root'
})

export class editarProyectoService {

  listaURL = 'http://localhost:8080/';

  constructor(
    private httpClient: HttpClient
    ) { }

  actualizarProyectos(id:string,proyecto:Proyectos){
    console.log(proyecto);
      return this.httpClient.put<any>(this.listaURL + 'api/proyecto/'+id,proyecto);
    }
  
  obtenerProyectos(id:string): Observable<any> {
    return this.httpClient.get<any[]>(this.listaURL + 'api/proyecto/'+id);
  }

}
