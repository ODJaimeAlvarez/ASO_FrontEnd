import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Component({
  selector: 'app-menuhamburguer',
  templateUrl: './menuhamburguer.component.html',
  styleUrls: ['./menuhamburguer.component.scss']
})
export class MenuhamburguerComponent implements OnInit {

  roles: string[];
  visibilidadDirector: boolean;

  constructor(
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.roles= this.tokenService.getAuthorities();
    this.roles.forEach(rol=> {
      if(rol === 'DIRECTOR') {
        this.visibilidadDirector= true;
      }
    });
  }

}
