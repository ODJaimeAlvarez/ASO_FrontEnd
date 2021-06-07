import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyectos } from '../models/proyectos';
import { URLServidor } from '../models/url-servidor';

@Injectable({
  providedIn: 'root'
})
export class ListaFicherosService {

  rutaLocal = 'http://localhost:8080/';
  rutaServidor: URLServidor;

  constructor(
    private httpClient: HttpClient
  ) { }

  ficheros(id: string): Observable<any[]> {
    return this.httpClient.get<any[]>(this.rutaLocal + 'api/files/project/'+id);
  }//obtenerFicheros

  subir(id: string, fichero:File): Observable<any[]> {
    const formData: FormData = new FormData();

    formData.append('file', fichero);

    return this.httpClient.post<any[]>(this.rutaLocal + 'api/files/'+id, formData);
  }

  descargar(id: string): Observable<Blob> {
    return this.httpClient.get(`${this.rutaLocal}api/files/file/${id}`, {
      
      responseType: 'blob'
    });
  }

  editar(id: string, fichero: File): Observable<any[]> {
    const formData: FormData = new FormData();

    formData.append('file', fichero);

    return this.httpClient.put<any[]>(this.rutaLocal + 'api/files/'+id, formData);
  }

}
