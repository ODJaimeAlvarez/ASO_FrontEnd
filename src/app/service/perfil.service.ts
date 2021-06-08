import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleados } from '../models/empleados';
import { Clientes } from '../models/clientes';
import { Notas } from '../models/notas';
import { URLServidor } from '../models/url-servidor';

@Injectable({
  providedIn: 'root'
})

export class PerfilService {

  URL: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.URL = URLServidor.ruta;
  }

  usuario(): Observable<any> {
    return this.httpClient.get<any>(this.URL + 'api/empleados/perfil');
  }//usuario

  editarUsuario(id: string, usuario: Empleados): Observable<any> {
    return this.httpClient.put<any>(this.URL + 'api/empleados/' + id, usuario);
  }//editarUsuario

  cliente(): Observable<any> {
    return this.httpClient.get<any>(this.URL + 'api/cliente/perfil');
  }//cliente

  editarCliente(id: string, cliente: Clientes): Observable<any> {
    return this.httpClient.put<any>(this.URL + 'api/cliente/' + id, cliente);
  }//editarCliente

  notas(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.URL + 'api/notas');
  }//notas

  guardarNota(nota: Notas): Observable<any[]> {
    return this.httpClient.post<any[]>(this.URL + 'api/notas', nota);
  }//guardarNota

  eliminarNota(id: string): Observable<any[]> {
    return this.httpClient.delete<any[]>(this.URL + 'api/notas/' + id);
  }//eliminarNota

  subirFoto(id: string, fichero: File): Observable<any[]> {
    const formData: FormData = new FormData();
    formData.append('file', fichero);
    return this.httpClient.put<any[]>(this.URL + 'api/empleados/cambiarFoto/' + id, formData);
  }//subirFoto

  subirFotoCliente(id: string, fichero: File): Observable<any[]> {
    const formData: FormData = new FormData();
    formData.append('file', fichero);
    return this.httpClient.put<any[]>(this.URL + 'api/cliente/cambiarFoto/' + id, formData);
  }//subirFotoCliente

  descargar(id: string) {
    return this.httpClient.get(`${this.URL}api/files/fotoUsuario/${id}`, {
      responseType: 'blob',
      observe: 'response'
    });
  }//descargar

}
