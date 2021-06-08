import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const EMAIL_KEY = 'AuthEmail';
const AUTHORITIES_KEY = 'AuthAuthorities'; //aparecen en session storage

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  roles: Array<string> = [];

  constructor() { }

  public setToken(jwToken: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, jwToken);
  }//setToken

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }//getToken

  public setUserName(email: string): void {
    window.sessionStorage.removeItem(EMAIL_KEY);
    window.sessionStorage.setItem(EMAIL_KEY, email);
  }//setUserName

  public getUserName(): string {
    return sessionStorage.getItem(EMAIL_KEY);
  }//getUserName

  public setAuthorities(authorities: string[]): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }//setAuthorities

  public getAuthorities(): string[] {
    this.roles = [];
    if (sessionStorage.getItem(AUTHORITIES_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
        this.roles.push(authority);
      });
    }
    return this.roles;
  }//getAuthorities

  public logOut(): void {
    window.sessionStorage.clear();
  }//logOut
}
