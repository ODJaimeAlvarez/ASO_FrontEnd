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

  URL: string;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.URL = URLServidor.ruta;
  }

  public nuevo(data: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'api/auth/register', data);
  }//nuevo

  public login(loginUsuario: LoginUsuario): Observable<any> {
    return this.httpClient.post<LoginResponse>(this.URL + 'api/auth/login', loginUsuario);
  }//login

}
