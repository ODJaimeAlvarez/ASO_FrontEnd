import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { TokenService } from '../service/token.service';

@Injectable({
  providedIn: 'root'
})

export class RolesGuardGuard implements CanActivate {

  realRol: string;

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRol = route.data.expectedRol;
    const roles = this.tokenService.getAuthorities();
    this.realRol = 'director';
    roles.forEach(rol => {
      console.log(rol);
      if (rol === 'EMPLEADO') {
        this.realRol = 'empleado';
      }
      if (rol === 'CLIENTE') {
        this.realRol = 'cliente';
      }
    });
    if (!this.tokenService.getToken() || expectedRol.indexOf(this.realRol) === -1) { 
      this.router.navigate(['/proyectos']);
      return false;
    }
    return true;
  }//canActivate
}