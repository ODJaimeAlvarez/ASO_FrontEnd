import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Jornadas } from '../models/jornadas';
import { ListaJornadaService } from './jornada.service';
import { TokenService } from '../service/token.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-jornada',
  templateUrl: './jornada.component.html',
  styleUrls: ['./jornada.component.scss']
})

export class JornadaComponent implements OnInit {

  visibilidad: boolean;
  jornada :string;
  roles: string[];
  visibilidadDirector: boolean;
  isIniciada: Jornadas;

  constructor(
    private renderer: Renderer2,
    private listaService: ListaJornadaService,
    private tokenService: TokenService,
    private toastr: ToastrService) { }

    ngOnInit(): void {
      this.roles= this.tokenService.getAuthorities();
      this.roles.forEach(rol=> {
        if(rol === 'DIRECTOR') {
          this.visibilidadDirector= true;
        }
      });
      this.jornadaIniciada();
    }

  jornadaIniciada() {
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
       if(data.horafin === "-") {
       this.toastr.info('Has iniciado tu jornada a las: ' + data.horaInicio, data.fecha, {
        timeOut: 3000, positionClass: 'toast-top-right'
      });} else {
        this.toastr.info('Has finalizado tu jornada a las: ' + data.horafin, data.fecha, {
          timeOut: 3000, positionClass: 'toast-top-right'
        });
      }

       console.log(data);
      },
      err => {
        console.log(err);
      }
    );
}
  
  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

}
