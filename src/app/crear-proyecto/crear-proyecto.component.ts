import { Component, OnInit } from '@angular/core';
import { Clientes } from '../models/clientes';
import { Empleados } from '../models/empleados';
import { Estados, Estado_aceptado } from '../models/estados';
import { Progreso, Progreso_aceptado, Progreso_iniciado } from '../models/progreso_proyecto';
import { proyectoNuevo } from '../models/proyecto-nuevo';
import { crearProyectoService } from '../service/crearProyecto.service';
import { TablaEmpleadosService } from '../tabla-empleados/tabla-empleados.service';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.scss']
})
export class CrearProyectoComponent implements OnInit {

  constructor(private listaService: crearProyectoService,
    ) { 
    
  }
 
  progreso:Estados;
  progreso_proyecto: string[]=["ACEPTADO"];
  Proyecto: proyectoNuevo;
  empleados:Empleados[];
  nombre:string="";
  descripcion:string="";
  empleadosAsignados:Empleados[]=[];
  clientes:Clientes[];
  cliente:Clientes;
  ngOnInit(): void {
    this.listaEmpleados();
    this.listaClientes();
  }

  crearProyecto(){
    this.Proyecto={
      nombre:this.nombre,
      descripcion:this.descripcion,
      estado:new Estado_aceptado,
      empleados:this.empleadosAsignados,
      cliente:this.cliente
    }
    console.log(this.Proyecto);
   
    this.listaService.guardarProyecto(this.Proyecto).subscribe(
      data => {
        console.log(data);
       
      },
      err => {
        console.log(err);
      }
    );
  }

  listaClientes(){
    this.listaService.clientes().subscribe(

      data=>{
        this.clientes=data;
      }
      ,
      err => {
        console.log(err);
      }

    );
  }

  listaEmpleados() {
  
    this.listaService.empleados().subscribe(

      data=>{
        this.empleados=data;
      }
      ,
      err => {
        console.log(err);
      }
      );
  }

  seleccionado(empleado:Empleados):void{

    let emp= this.empleadosAsignados.find(x=>x.id==empleado.id);
    if(emp==undefined||emp==null){
      this.empleadosAsignados.push(empleado);
      
    }else{
      this.empleadosAsignados.splice(this.empleadosAsignados.indexOf(empleado));
    }
    console.log(this.empleadosAsignados)
  }

  seleccionadoCliente(cliente:Clientes):void{

    this.cliente=cliente;
    console.log(this.cliente)

  }
 

}


