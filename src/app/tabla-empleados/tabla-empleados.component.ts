import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Empleados } from '../models/empleados';
import { TablaEmpleadosService } from './tabla-empleados.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-tabla-empleados',
  templateUrl: './tabla-empleados.component.html',
  styleUrls: ['./tabla-empleados.component.scss']
})
export class TablaEmpleadosComponent implements OnInit {

  empleados: Empleados[];
  filterPosts = '';
  activo: boolean;

  page_size: number = 5;
  page_number: number =1;
  pageSizeOptions = [5, 10, 20];

  constructor(private listaService: 
    TablaEmpleadosService,
    private router: Router) { }

  ngOnInit(): void {
    this.listaEmpleados();
  }

  handlePage(e: PageEvent) {
    this.page_size =e.pageSize;
    this.page_number =e.pageIndex+1; //paginator empieza por 0
  }

  listaEmpleados(): void {
    this.listaService.empleados().subscribe(
      data => {
        this.empleados = data;
        for (let i = 0; i < this.empleados.length; i++) {
          switch (this.empleados[i].activo) {
            case true:
              this.activo=true;
              break;
            case false:
              this.activo=false;
              break;
          }
       
        }

      },
      err => {
        console.log(err);
      }
    );
  }//listaEmpleados

  verUnEmpleado(empleado: Empleados){
    this.router.navigate(["/seguimiento/empleado",empleado.id]);
  }

}
