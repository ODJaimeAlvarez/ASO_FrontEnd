import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  texto: string = "Inicio";
  roles: string[];
  visibilidadDirector: boolean;
  visibilidadEmpleado: boolean;

  constructor(
    private tokenService: TokenService,
  ) { }

  ngOnInit(): void {
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'DIRECTOR') {
        this.visibilidadDirector = true;
      }
      if (rol === 'EMPLEADO') {
        this.visibilidadEmpleado = true;
      }
    });
  }

  guia() {
    document.getElementById("perfilGuia").click();
    document.getElementById("headerGuia").style.zIndex = "9999";
    if (this.visibilidadDirector || this.visibilidadEmpleado) {
      this.texto = "Inicio";
    } else {
      this.texto = "Inicio2"
    }
  }

  cambiar() {
    switch (this.texto) {
      case "Inicio":
        document.getElementById("infoModal1").innerHTML = "Jornada:";
        document.getElementById("infoModal2").innerHTML = "Podrás iniciar y finalizar tu jornada laboral aquí. Acuérdate siempre de finalizar tu jornada antes de cerrar la sesión";
        document.getElementById("jornadaGuia").click();
        document.getElementById("headerGuia").style.zIndex = "9999";
        this.texto = "Inicio2";
        break;
      case "Inicio2":
        document.getElementById("infoModal1").innerHTML = "Catálogo:";
        document.getElementById("infoModal2").innerHTML = "Podrás revisar estadísticas de la empresa y páginas de interés";
        document.getElementById("menuGuia").click();
        document.getElementById("headerGuia").style.zIndex = "9999";
        document.getElementById("navGuia").style.zIndex = "9998";
        document.getElementById("catalogoGuia").classList.add("iconoFlecha");
        this.texto = "Inicio3";
        break;
      case "Inicio3":
        document.getElementById("catalogoGuia").classList.remove("iconoFlecha");
        document.getElementById("infoModal1").innerHTML = "Proyectos:";
        if (this.visibilidadDirector) {
          document.getElementById("infoModal2").innerHTML = "Visualiza todos los proyectos, en qué estado se encuentran y los ficheros que contienen, además podrás añadir nuevos y editar los proyectos existentes";
        }
        if (this.visibilidadEmpleado) {
          document.getElementById("infoModal2").innerHTML = "Visualiza todos tus proyectos, en qué estado se encuentran y los ficheros que contienen";
        } else {
          document.getElementById("infoModal2").innerHTML = "Visualiza todos tus proyectos y en qué estado se encuentran";
        }
        document.getElementById("proyectosGuia").classList.add("iconoFlecha");
        if (this.visibilidadDirector) {
          this.texto = "Inicio4";
        } else {
          this.texto = "Inicio6"
        }
        break;
      case "Inicio4":
        document.getElementById("proyectosGuia").classList.remove("iconoFlecha");
        document.getElementById("infoModal1").innerHTML = "Seguimiento:";
        document.getElementById("infoModal2").innerHTML = "Visualiza una tabla de todos los empleados activos y no activos de la empresa, además podrás visualizar la información personal de cada empleado y los horarios de sus jornadas laborales";
        document.getElementById("seguimientoGuia").classList.add("iconoFlecha");
        this.texto = "Inicio5";
        break;
      case "Inicio5":
        document.getElementById("seguimientoGuia").classList.remove("iconoFlecha");
        document.getElementById("infoModal1").innerHTML = "Dar de alta:";
        document.getElementById("infoModal2").innerHTML = "Podrás dar de alta a los empleados";
        document.getElementById("darAltaGuia").classList.add("iconoFlecha");
        this.texto = "Inicio6";
        break;
      case "Inicio6":
        document.getElementById("darAltaGuia").classList.remove("iconoFlecha");
        if (this.visibilidadEmpleado) {
          document.getElementById("proyectosGuia").classList.remove("iconoFlecha");
        } else {
          document.getElementById("proyectosGuia").classList.remove("iconoFlecha");
        }
        document.getElementById("infoModal1").innerHTML = "Contactanos:";
        document.getElementById("infoModal2").innerHTML = "Envía un correo electrónico a la empresa para solicitar información o resolver tus dudas";
        document.getElementById("contactanosGuia").classList.add("iconoFlecha");
        this.texto = "Inicio7";
        break;
      case "Inicio7":
        document.getElementById("contactanosGuia").classList.remove("iconoFlecha");
        document.getElementById("infoModal1").innerHTML = "¡Comienza tu experiencia en el Portal ASO!";
        document.getElementById("infoModal2").innerHTML = "";
        this.texto = "Fin";
        break;
      case "Fin":
        window.location.reload();
        break;
    }
  }

  cerrarModal() {
    window.location.reload();
  }
}
