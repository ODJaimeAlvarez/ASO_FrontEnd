import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private httpClient: HttpClient, private cookies: CookieService) {}

  login(user: any): Observable<any>{
    return this.httpClient.post('/api/login', user);
  }
  setToken(token: string) {
    this.cookies.set("jwToken", token);
  }
  getToken() {
    return this.cookies.get("jwToken");
  }
  
}
