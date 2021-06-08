import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../models/login-usuario';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardGuard implements CanActivate {

  loginUsuario: LoginUsuario;

  constructor(
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (window.sessionStorage.getItem("AuthToken") == null) {
      console.log('No estás logueado');
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
