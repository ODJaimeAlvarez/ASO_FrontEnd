import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLServidor } from '../models/url-servidor';

@Injectable({
  providedIn: 'root'
})

export class ListaFicherosService {

  URL: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.URL = URLServidor.ruta;
  }

  ficheros(id: string): Observable<any[]> {
    return this.httpClient.get<any[]>(this.URL + 'api/files/project/' + id);
  }//ficheros

  subir(id: string, fichero: File): Observable<any[]> {
    const formData: FormData = new FormData();
    formData.append('file', fichero);
    return this.httpClient.post<any[]>(this.URL + 'api/files/' + id, formData);
  }//subir

  descargar(id: string): Observable<Blob> {
    return this.httpClient.get(`${this.URL}api/files/file/${id}`, {
      responseType: 'blob'
    });
  }//descargar

  editar(id: string, fichero: File): Observable<any[]> {
    const formData: FormData = new FormData();
    formData.append('file', fichero);
    return this.httpClient.put<any[]>(this.URL + 'api/files/' + id, formData);
  }//editar

}
