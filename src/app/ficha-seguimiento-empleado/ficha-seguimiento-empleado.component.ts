import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleados } from '../models/empleados';
import { SeguimientoEmpleadoService } from '../service/seguimiento-empleado.service';
import { ActivatedRoute } from '@angular/router';
import { Jornadas } from '../models/jornadas';
import { DatePipe, getLocaleTimeFormat } from '@angular/common';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-seguimiento-empleado',
  templateUrl: './ficha-seguimiento-empleado.component.html',
  styleUrls: ['./ficha-seguimiento-empleado.component.scss']
})
export class SeguimientoEmpleadoComponent implements OnInit {

  empleados:Empleados;
  jornadas:Jornadas[];
  visibilidad: boolean;

  page_size: number = 5;
  page_number: number =1;
  pageSizeOptions = [5, 10, 20];

  constructor(
    private listaService: SeguimientoEmpleadoService,
    private router: ActivatedRoute,
    public datepipe:DatePipe) {
    
   }

  ngOnInit(): void {
    this.listaEmpleados();
    this.listaJornada();
    
  }

  handlePage(e: PageEvent) {
    this.page_size =e.pageSize;
    this.page_number =e.pageIndex+1; //paginator empieza por 0
  }
  
  listaJornada() {
    let id = this.router.snapshot.paramMap.get("id");
    
    this.listaService.jornadas(id).subscribe(
      data => {
        this.jornadas = data;
        for(let i=0;i<this.jornadas.length;i++){
          this.jornadas[i].formato=this.datepipe.transform(this.jornadas[i].fecha_jornada,'yyyy-MM-dd');
        }  
      },
      err => {
        console.log(err);
      }
    );

  }
  

  listaEmpleados(): void {
    let id = this.router.snapshot.paramMap.get("id");
    
    this.listaService.empleados(id).subscribe(
      data => {
        this.empleados = data;  
              console.log(data)      ;
      },
      err => {
        console.log(err);
      }
    );
    
  }//listaProyectos

   bajaEmpleado(): void {
    this.visibilidad= true;
    let id = this.router.snapshot.paramMap.get("id");
    
    this.listaService.baja(id).subscribe(
      data => {
            console.log(data);
            window.location.reload();
      },
      err => {
        console.log(err);
      }
    );
    
  }//bajaEmpleado

  altaEmpleado(): void {
    this.visibilidad= false;
    let id = this.router.snapshot.paramMap.get("id");
    
    this.listaService.alta(id).subscribe(
      data => {
            console.log(data);
            window.location.reload();
      },
      err => {
        console.log(err);
      }
    );
    
  }//altaEmpleado

}
