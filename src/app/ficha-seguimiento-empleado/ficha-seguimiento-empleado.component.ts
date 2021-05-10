import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleados } from '../models/empleados';
import { SeguimientoEmpleadoService } from '../service/seguimiento-empleado.service';

@Component({
  selector: 'app-seguimiento-empleado',
  templateUrl: './ficha-seguimiento-empleado.component.html',
  styleUrls: ['./ficha-seguimiento-empleado.component.scss']
})
export class SeguimientoEmpleadoComponent implements OnInit {

  empleados:Empleados[];
  constructor(private listaService: SeguimientoEmpleadoService,
    private router: Router) {
    
   }

  ngOnInit(): void {
    this.listaEmpleados();
  }
  listaEmpleados():void {
    this.listaService.empleados().subscribe(
      data=>{
        this.empleados=data;
      },
      err=>{
        console.log(err);
      }
    )
  }

  verEmpleado(empleado: Empleados) {
    this.router.navigate(["/usuarios",empleado.id]);
  }

}
