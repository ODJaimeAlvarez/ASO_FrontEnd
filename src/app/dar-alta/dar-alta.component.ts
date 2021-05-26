import { Component, OnInit } from '@angular/core';
import { NewEmpleado} from '../models/new_empleado';
import { Rol, Rol_director, Rol_empleado } from '../models/rol';
import { DarAltaService } from '../service/dar-alta.service';

@Component({
  selector: 'app-dar-alta',
  templateUrl: './dar-alta.component.html',
  styleUrls: ['./dar-alta.component.scss']
})
export class DarAltaComponent implements OnInit {

  constructor(
    private listaService: DarAltaService
  ) { }



  ngOnInit(): void {
  
  }

  Roles: Rol[]=[new Rol_director,new Rol_empleado];
  rol :Rol;
  Empleado :NewEmpleado
  nombre:string=""
  apellido1:string=""
  apellido2:string=""
  cargo:string=""
  telefono:string=""
  correo:string=""
  direccion:string=""
  descripcion:string=""
  password:string=""

  crearEmpleado(){

    this.Empleado={
      nombre: this.nombre,
      apellido1: this.apellido1,
      apellido2: this.apellido2,
      correo: this.correo,      
      cargo: this.cargo,
      telefono: this.telefono,
      direccion: this.direccion,
      descripcion: this.descripcion,
      password:this.password,
      rol:this.rol}
    
      this.listaService.darAlta(this.Empleado).subscribe((data)=>{
        console.log(data);
        
      })

  }

 



}
