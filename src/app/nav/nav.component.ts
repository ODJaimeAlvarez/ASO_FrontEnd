import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isLogged= false;
  roles: string[];
  verJornada: boolean;

  constructor(
    private tokenService: TokenService,
    private router: Router
    ) { }

  ngOnInit() {
    if(this.tokenService.getToken()) {
      this.isLogged=true;
    } else {
      this.isLogged=false;
    }
    this.roles= this.tokenService.getAuthorities();
    this.roles.forEach(rol=> {
      if(rol === 'DIRECTOR') {
        this.verJornada= true;
      }
      if(rol === 'EMPLEADO') {
        this.verJornada= true;
      }
    });
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

}
