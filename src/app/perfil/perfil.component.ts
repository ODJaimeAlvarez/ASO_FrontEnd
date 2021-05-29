import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../service/perfil.service';
import { Empleados } from '../models/empleados';
import { Clientes } from '../models/clientes';
import { TokenService } from '../service/token.service';
import { Notas } from '../models/notas';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  roles: string[];

  usuarios: any;
  nombre: string;
  apellido1: string;
  apellido2: string;
  correo: string;
  activo: boolean;
  cargo: string;
  telefono: string;
  direccion: string;
  descripcion: string;
  pais: string;
  ciudad: string;
  CP: string;

  //clientes: Clientes;
  empresa: string;

  notas: Notas[];
  nota: string;
  nombreNota: string;

  constructor(
    private perfilService: PerfilService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.roles= this.tokenService.getAuthorities();
    this.roles.forEach(rol=> {
      if(rol === 'CLIENTE') {
        this.listaClientes();
      } else {
        this.listaEmpleados();
      }
    });

    this.listaNotas();
  }

  listaEmpleados(): void {
    this.usuarios = new Empleados(this.nombre, this.apellido1, this.apellido2, this.correo, this.activo, this.cargo,
      this.telefono, this.direccion, this.descripcion, this.pais, this.ciudad, this.CP);

    this.perfilService.usuario().subscribe(
      data => {
        this.usuarios = data;
        this.nombre = data.nombre;
        this.apellido1 = data.apellido1;
        this.apellido2 = data.apellido2;
        this.correo = data.correo;
        this.activo = data.activo;
        this.cargo = data.cargo;
        this.telefono = data.telefono;
        this.direccion = data.direccion;
        this.descripcion = data.descripcion;
        this.pais = data.pais;
        this.ciudad = data.ciudad;
        this.CP = data.CP;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );

  }//listaEmpleados

  editarEmpleado(): void {
    let empleado = new Empleados(this.nombre, this.apellido1, this.apellido2, this.correo, this.activo, this.cargo,
      this.telefono, this.direccion, this.descripcion, this.pais, this.ciudad, this.CP);
      
      this.perfilService.editarUsuario(this.usuarios.id, empleado).subscribe(
        data => {
          console.log(data);
          window.location.reload();
        },
        err => {
          console.log(err);
        }
      );

  }//editarEmpleado

  listaNotas(): void {
    this.perfilService.notas().subscribe(
      data => {
        this.notas = data.reverse();
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );

  }//listaNotas

  anadirNota(): void {
    let nuevaNota = new Notas(this.nombreNota, this.nota);
    this.perfilService.guardarNota(nuevaNota).subscribe(
      data => {
        console.log(data);
        window.location.reload();
      },
      err => {
        console.log(err);
      }
    )
  }//anadirNota

  eliminarNota(id: string): void {
    this.perfilService.eliminarNota(id).subscribe(
      data => {
        console.log(data);
        window.location.reload();
      },
      err => {
        console.log(err);
      }
    )
  }//anadirNota

  editarCliente(): void {
    let cliente = new Clientes(this.nombre, this.apellido1, this.apellido2, this.correo, this.activo, this.empresa,
      this.telefono, this.direccion, this.descripcion, this.pais, this.ciudad, this.CP);

    this.perfilService.editarCliente(this.usuarios.id, cliente).subscribe(
      data => {
        console.log(data);
        window.location.reload();
      },
      err => {
        console.log(err);
      }
    );

  }//editarCliente

  listaClientes(): void {
    this.usuarios = new Clientes(this.nombre, this.apellido1, this.apellido2, this.correo, this.activo, this.empresa,
      this.telefono, this.direccion, this.descripcion, this.pais, this.ciudad, this.CP);

    this.perfilService.cliente().subscribe(
      data => {
        this.usuarios = data;
        this.nombre = data.nombre;
        this.apellido1 = data.apellido1;
        this.apellido2 = data.apellido2;
        this.correo = data.correo;
        this.activo = data.activo;
        this.empresa = data.empresa;
        this.telefono = data.telefono;
        this.direccion = data.direccion;
        this.descripcion = data.descripcion;
        this.pais = data.pais;
        this.ciudad = data.ciudad;
        this.CP = data.CP;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );

  }//listaClientes

}
