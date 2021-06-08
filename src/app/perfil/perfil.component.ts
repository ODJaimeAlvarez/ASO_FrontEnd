import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../service/perfil.service';
import { Empleados } from '../models/empleados';
import { Clientes } from '../models/clientes';
import { TokenService } from '../service/token.service';
import { Notas } from '../models/notas';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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
  empresa: string;
  notas: Notas[];
  nota: string;
  nombreNota: string;
  selectedFiles: FileList;
  currentFileUpload: File;
  url: SafeUrl;

  constructor(
    private perfilService: PerfilService,
    private tokenService: TokenService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'CLIENTE') {
        this.listaClientes();
      } else {
        this.listaEmpleados();
      }
    });
    this.listaNotas();
  }//ngOnInit

  fotoPerfil(id: string) {
    let imagen;
    this.perfilService.descargar(id).subscribe(data => {
      imagen = URL.createObjectURL(data.body)
      this.url = this.sanitizer.bypassSecurityTrustUrl(imagen);
      console.log(this.url.toString());
    });
  }//fotoPerfil

  selectFile(event) {
    console.log(event.target.files);
    this.selectedFiles = event.target.files;
    console.log(event);
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'CLIENTE') {
        this.nuevaFotoCliente();
      } else {
        this.nuevaFoto();
      }
    });
  }//selectFile

  nuevaFoto() {
    console.log('Imagen cargada correctamente');
    this.currentFileUpload = this.selectedFiles.item(0);
    this.perfilService.subirFoto(this.usuarios.id, this.currentFileUpload).subscribe(event => {
      console.log('Imagen cargada correctamente');
      window.location.reload();
    });
    this.selectedFiles = undefined;
  }//nuevaFoto

  nuevaFotoCliente() {
    console.log('Cliente: Imagen cargada correctamente');
    this.currentFileUpload = this.selectedFiles.item(0);
    this.perfilService.subirFotoCliente(this.usuarios.id, this.currentFileUpload).subscribe(event => {
      console.log('Cliente: Imagen cargada correctamente');
    });
    this.selectedFiles = undefined;
  }//nuevaFotoCliente

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
        if (data.fotoPerfil != null) {
          console.log("Entro a metodo ");
          this.fotoPerfil(data.fotoPerfil.id);
        }
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
  }//eliminarNota

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
        if (data.fotoPerfil != null) {
          console.log("Entro a metodo ");
          this.fotoPerfil(data.fotoPerfil.id);
        }
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }//listaClientes

}
