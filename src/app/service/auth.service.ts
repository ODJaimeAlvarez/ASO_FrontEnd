import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../models/login-usuario';
import { LoginResponse } from '../models/loginresponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(email: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', email);
  }

  public login(loginUsuario: LoginUsuario): Observable<any> {
    return this.httpClient.post<LoginResponse>(this.authURL + 'api/auth/login', loginUsuario);
  }

}
