import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleados } from '../models/empleados';
import { SeguimientoEmpleadoService } from './seguimiento-empleado.service';
import { ActivatedRoute } from '@angular/router';
import { Jornadas } from '../models/jornadas';
import { DatePipe, getLocaleTimeFormat } from '@angular/common';


@Component({
  selector: 'app-seguimiento-empleado',
  templateUrl: './seguimiento-empleado.component.html',
  styleUrls: ['./seguimiento-empleado.component.scss']
})
export class SeguimientoEmpleadoComponent implements OnInit {

  empleados:Empleados;
  jornadas:Jornadas[];
  constructor(
    private listaService: SeguimientoEmpleadoService,
    private router: ActivatedRoute,
    public datepipe:DatePipe) {
    
   }

  ngOnInit(): void {
    this.listaEmpleados();
    this.listaJornada();
    
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

  

}
