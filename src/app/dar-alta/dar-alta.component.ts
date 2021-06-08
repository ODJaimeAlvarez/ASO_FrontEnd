import { Component, OnInit } from '@angular/core';
import { NuevoEmpleado } from '../models/nuevo-empleado';
import { Rol, Rol_director, Rol_empleado } from '../models/rol';
import { DarAltaService } from '../service/dar-alta.service';

@Component({
  selector: 'app-dar-alta',
  templateUrl: './dar-alta.component.html',
  styleUrls: ['./dar-alta.component.scss']
})

export class DarAltaComponent implements OnInit {

  roles: Rol[] = [new Rol_director, new Rol_empleado];
  rol: Rol;
  formatoRoles: string[] = ["Director", "Empleado"];
  empleado: NuevoEmpleado;
  nombre: string;
  apellido1: string;
  apellido2: string;
  cargo: string;
  listaCargos: string[] = ["Analista de Inteligencia de Negocio", "Analista Técnico", "Analista Funcional", "Analista de Datos", "Arquitecto Cloud", "Arquitecto de Big Data",
    "Administrador de Red o Cloud", "Administrador de Sistemas", "Consultor Junior", "Consultor Senior", "Consultor ERP", "Especialista en Datos", "Desarrollador Web",
    "Desarrollador de Software", "Desarrollador de Aplicaciones Multiplataforma", "Diseñador Web", "Ingeniero DevOps", "Profesional de Asistencia y Soporte Técnico",
    "Profesional de Seguridad", "Técnico Microinformático", "Técnico de Sistemas"];
  telefono: string;
  correo: string;
  direccion: string;
  pais: string;
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
  ciudad: string;
  CP: string;
  descripcion: string;
  password: string;
  formato: string;

  constructor(
    private darAltaService: DarAltaService
  ) { }

  ngOnInit(): void { }

  crearEmpleado() {
    switch (this.formato) {
      case "Director":
        this.rol = this.roles[0];
        break;
      case "Empleado":
        this.rol = this.roles[1];
        break;
    }
    this.empleado = {
      nombre: this.nombre,
      apellido1: this.apellido1,
      apellido2: this.apellido2,
      correo: this.correo,
      cargo: this.cargo,
      telefono: this.telefono,
      direccion: this.direccion,
      pais: this.pais,
      ciudad: this.ciudad,
      CP: this.CP,
      descripcion: this.descripcion,
      password: this.password,
      rol: this.rol
    }
    this.darAltaService.darAlta(this.empleado).subscribe(
      data => {
        console.log(data);
        window.location.reload();
      },
      err => {
        console.log(err);
      }
    );
  }//crearEmpleado
}