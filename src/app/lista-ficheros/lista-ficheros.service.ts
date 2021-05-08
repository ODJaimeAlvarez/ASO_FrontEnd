import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest, HttpParams } from '@angular/common/http';
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
    return this.httpClient.get<any[]>(this.listaURL + 'api/files/project/'+id);
  }//obtenerFicheros

  subir(id: string, fichero:File): Observable<any[]> {
    const formData: FormData = new FormData();

    formData.append('file', fichero);

    return this.httpClient.post<any[]>(this.listaURL + 'api/files/'+id, formData);
  }

  descargar(id: number): Observable<Blob> {
    return this.httpClient.get(`${this.listaURL}api/files/file/${id}`, {
      
      responseType: 'blob'
    });
  }

  editar(id: string, fichero: File): Observable<any[]> {
    const formData: FormData = new FormData();

    formData.append('file', fichero);

    return this.httpClient.put<any[]>(this.listaURL + 'api/files/'+id, formData);
  }

}
