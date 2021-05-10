import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-jornada',
  templateUrl: './jornada.component.html',
  styleUrls: ['./jornada.component.scss']
})


export class JornadaComponent implements OnInit {

  visibilidad: boolean;
  roles: string[];
  verSeguimiento: boolean;

  constructor(private renderer: Renderer2, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.roles= this.tokenService.getAuthorities();
    this.roles.forEach(rol=> {
      if(rol === 'DIRECTOR') {
        this.verSeguimiento= true;
      }
    });
  }

  iniciarJornada() {
      this.visibilidad=true;
      
  }  

  finalizarJornada() {
    this.visibilidad=false;
  }

}
