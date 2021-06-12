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
  listaPaises: string[] = ["Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda", "Arabia Saudita", "Argelia", "Argentina",
  "Armenia", "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bangladés", "Barbados", "Baréin", "Bélgica", "Belice", "Benín", "Bielorrusia", "Birmania", "Bolivia",
  "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar", "Chad", "Chile",
  "China", "Chipre", "Ciudad del Vaticano", "Colombia", "Comoras", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Dominica",
  "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía", "Filipinas", "Finlandia", "Fiyi",
  "Francia", "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Grecia", "Guatemala", "Guyana", "Guinea", "Guinea ecuatorial", "Guinea-Bisáu", "Haití", "Honduras", "Hungría", "India",
  "Indonesia", "Irak", "Irán", "Irlanda", "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia", "Jamaica", "Japón", "Jordania", "Kazajistán", "Kenia", "Kirguistán", "Kiribati",
  "Kuwait", "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Macedonia del Norte", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí",
  "Malta", "Marruecos", "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montenegro", "Mozambique", "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger",
  "Nigeria", "Noruega", "Nueva Zelanda", "Omán", "Países Bajos", "Pakistán", "Palaos", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", "Polonia", "Portugal", "Reino Unido",
  "República Centroafricana", "República Checa", "República del Congo", "República Democrática del Congo", "República Dominicana", "Ruanda", "Rumanía", "Rusia", "Samoa",
  "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria",
  "Somalia", "Sri Lanka", "Suazilandia", "Sudáfrica", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam", "Tailandia", "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga",
  "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Yibuti", "Zambia", "Zimbabue"];

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
    });
  }//fotoPerfil

  selectFile(event) {
    this.selectedFiles = event.target.files;
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
    this.currentFileUpload = this.selectedFiles.item(0);
    this.perfilService.subirFoto(this.usuarios.id, this.currentFileUpload).subscribe(event => {
      window.location.reload();
    });
    this.selectedFiles = undefined;
  }//nuevaFoto

  nuevaFotoCliente() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.perfilService.subirFotoCliente(this.usuarios.id, this.currentFileUpload).subscribe(event => {
      window.location.reload();
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
          this.fotoPerfil(data.fotoPerfil.id);
        }
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
          this.fotoPerfil(data.fotoPerfil.id);
        }
      },
      err => {
        console.log(err);
      }
    );
  }//listaClientes

}
