import { Component, OnInit } from '@angular/core';
import { Jornadas } from '../models/jornadas';
import { ListaJornadaService } from '../service/jornada.service';
import { TokenService } from '../service/token.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-jornada',
  templateUrl: './jornada.component.html',
  styleUrls: ['./jornada.component.scss']
})

export class JornadaComponent implements OnInit {

  visibilidad: boolean;
  jornada: string;
  roles: string[];
  visibilidadDirector: boolean;
  isIniciada: Jornadas;

  constructor(
    private listaJornadaService: ListaJornadaService,
    private tokenService: TokenService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'DIRECTOR') {
        this.visibilidadDirector = true;
      }
    });
    this.jornadaIniciada();
  }//ngOnInit

  jornadaIniciada() {
    this.listaJornadaService.isIniciada().subscribe(data => {
      this.isIniciada = data;
      if (this.isIniciada) {
        this.visibilidad = true;
      } else {
        this.visibilidad = false;
      }
    },
      err => {
        console.log(err);
      });
  }//jornadaIniciada

  jornadaManager() {
    this.visibilidad = !this.visibilidad;
    this.listaJornadaService.jornadas().subscribe(
      data => {
        this.jornada = data;
        if (data.horafin === "-") {
          this.toastr.info('Has iniciado tu jornada a las: ' + data.horaInicio, data.fecha, {
            timeOut: 3000, positionClass: 'toast-top-right'
          });
        } else {
          this.toastr.info('Has finalizado tu jornada a las: ' + data.horafin, data.fecha, {
            timeOut: 3000, positionClass: 'toast-top-right'
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }//jornadaManager

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }//onLogOut

}
