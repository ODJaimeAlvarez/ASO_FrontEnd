import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../models/login-usuario';
import { LoginResponse } from '../models/loginresponse';
import { URLServidor } from '../models/url-servidor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rutaLocal = 'http://localhost:8080/';
  rutaServidor: URLServidor;

  constructor(private httpClient: HttpClient) { }

  public nuevo(data: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.rutaLocal + 'api/auth/register', data);
  }

  public login(loginUsuario: LoginUsuario): Observable<any> {
    return this.httpClient.post<LoginResponse>(this.rutaLocal + 'api/auth/login', loginUsuario);
  }

}
