import { Component, OnInit } from '@angular/core';
import { Empleados } from '../models/empleados';
import { TablaEmpleadosService } from './tabla-empleados.service';

@Component({
  selector: 'app-tabla-empleados',
  templateUrl: './tabla-empleados.component.html',
  styleUrls: ['./tabla-empleados.component.scss']
})
export class TablaEmpleadosComponent implements OnInit {

  empleados: Empleados[];
  filterPosts='';



  constructor(private listaService: TablaEmpleadosService) { }

  ngOnInit(): void {
    this.listaEmpleados();
  }

 

  listaEmpleados(): void {
    this.listaService.empleados().subscribe(
      data => {
        this.empleados = data;
       
      },
      err => {
        console.log(err);
      }
    );
  }//listaEmpleados

}
