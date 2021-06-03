import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleados } from '../models/empleados';
import { Clientes } from '../models/clientes';
import { Notas } from '../models/notas';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  listaURL = 'http://localhost:8080/';

  constructor(
    private httpClient: HttpClient
  ) { }

  usuario(): Observable<any> {
    return this.httpClient.get<any>(this.listaURL + 'api/empleados/perfil');
  }//usuario

  editarUsuario(id: string, usuario: Empleados): Observable<any> {
    return this.httpClient.put<any>(this.listaURL + 'api/empleados/'+id, usuario);
  }//editarUsuario

  cliente(): Observable<any> {
    return this.httpClient.get<any>(this.listaURL + 'api/cliente/perfil');
  }//cliente

  editarCliente(id:string, cliente: Clientes): Observable<any> {
    return this.httpClient.put<any>(this.listaURL + 'api/cliente/'+id, cliente);
  }//editarCliente

  notas(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.listaURL + 'api/notas');
  }//notas

  guardarNota(nota: Notas): Observable<any[]> {
    return this.httpClient.post<any[]>(this.listaURL + 'api/notas', nota);
  }//guardarNota

  eliminarNota(id: string): Observable<any[]> {
    return this.httpClient.delete<any[]>(this.listaURL + 'api/notas/'+id);
  }//eliminarNota

  subirFoto(id: string, fichero:File): Observable<any[]> {
    const formData: FormData = new FormData();

    formData.append('file', fichero);

    return this.httpClient.put<any[]>(this.listaURL + 'api/empleados/cambiarFoto/'+id, formData);
  }//subirFoto

  subirFotoCliente(id: string, fichero:File): Observable<any[]> {
    const formData: FormData = new FormData();

    formData.append('file', fichero);

    return this.httpClient.put<any[]>(this.listaURL + 'api/cliente/cambiarFoto/'+id, formData);
  }//subirFotoCliente

  descargar(id: string) {
    return this.httpClient.get(`${this.listaURL}api/files/fotoUsuario/${id}`, {
      
      responseType: 'blob',
      observe: 'response'
    });
  }

}
