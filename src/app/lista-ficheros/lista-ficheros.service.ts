import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyectos } from '../models/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ListaFicherosService {

  listaURL = 'http://localhost:8080/';

  constructor(
    private httpClient: HttpClient
  ) { }

  ficheros(id: string): Observable<any[]> {
    return this.httpClient.get<any[]>(this.listaURL + 'api/files/proyect/'+id);
  }

}
