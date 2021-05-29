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
  }//usuario

  cliente(): Observable<any> {
    return this.httpClient.get<any>(this.listaURL + 'api/cliente/perfil');
  }//usuario

  editarCliente(id:string, cliente: Clientes): Observable<any> {
    return this.httpClient.put<any>(this.listaURL + 'api/cliente/'+id, cliente);
  }//usuario

  notas(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.listaURL + 'api/notas');
  }//notas

  guardarNota(nota: Notas): Observable<any[]> {
    return this.httpClient.post<any[]>(this.listaURL + 'api/notas', nota);
  }//usuario

  eliminarNota(id: string): Observable<any[]> {
    return this.httpClient.delete<any[]>(this.listaURL + 'api/notas/'+id);
  }//usuario

}
