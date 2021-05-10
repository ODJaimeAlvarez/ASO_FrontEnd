import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleados } from '../models/empleados';
import { SeguimientoEmpleadoService } from './seguimiento-empleado.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seguimiento-empleado',
  templateUrl: './seguimiento-empleado.component.html',
  styleUrls: ['./seguimiento-empleado.component.scss']
})
export class SeguimientoEmpleadoComponent implements OnInit {

  empleados:Empleados;

  constructor(
    private listaService: SeguimientoEmpleadoService,
    private router: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.listaEmpleados();
    
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
