import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Jornadas } from '../models/jornadas';
import { ListaJornadaService } from './jornada.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-jornada',
  templateUrl: './jornada.component.html',
  styleUrls: ['./jornada.component.scss']
})


export class JornadaComponent implements OnInit {

  visibilidad: boolean;

  jornada :string;
  roles: string[];
  verSeguimiento: boolean;
  isIniciada: Jornadas;
  constructor(private renderer: Renderer2,
    private listaService: ListaJornadaService,private tokenService: TokenService) { }

  ngOnInit(): void {
    
    this.roles= this.tokenService.getAuthorities();
    this.roles.forEach(rol=> {
      if(rol === 'DIRECTOR') {
        this.verSeguimiento= true;
      }
    });
    this.jornadainiciada();
  }

  jornadainiciada() {

    this.listaService.isIniciada().subscribe(data => {
      this.isIniciada = data;
      if(this.isIniciada){
        this.visibilidad=true;
      }else{
        this.visibilidad=false;
      }
     console.log(data);
           
    },
    err => {
      console.log(err);
    });


  }

  jornadaManager() {

      this.visibilidad=!this.visibilidad;
      this.listaService.jornadas().subscribe(
        data => {
          this.jornada = data;
         console.log(data);
               
        },
        err => {
          console.log(err);
        }
      );
  }  

}
