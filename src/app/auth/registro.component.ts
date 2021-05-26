import { Component, OnInit } from '@angular/core';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';
import { TokenService } from 'src/app/service/token.service';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  isLogged = false;
  isRegister = false;
  isRegisterFail = false;
  nuevoUsuario: NuevoUsuario;
  nombre: string;
  apellido1: string;
  apellido2: string;
  empresa: string;
  telefono:string;
  direccion:string;
  correo: string;
  password: string;

  errMsj: string;

  constructor( 
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.apellido1, this.apellido2, this.empresa, this.telefono, this.direccion, this.correo, this.password);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        this.isRegister = true;
        this.isRegisterFail= false;
        console.log(data.jwToken);
        this.router.navigate(['login']); //necesito roles y token por aquí? lo redirigo a iniciar sesión?
      },
      err => {
        this.isRegister=false;
        this.isRegisterFail = true;
        this.errMsj = err.error.Error;
        console.log(this.errMsj);
      }
    );
  }//onRegister

}

