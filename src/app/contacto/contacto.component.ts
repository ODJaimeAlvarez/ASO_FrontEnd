import { Component, OnInit } from '@angular/core';
import { contactUsMail } from '../models/contactUs_mail';
import { ContactoService } from '../service/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor(
    private listaService: ContactoService
  ) { }

    
  correo:string=""
  asunto:string=""
  mensaje:string=""

  contacto :contactUsMail;


  ngOnInit(): void {
   
  }        

    enviarCorreo(): void {

      this.contacto={
      
        correo:this.correo,
        asunto:this.asunto,
        mensaje:this.mensaje
      }
      
      

      this.listaService.enviarCorreo(this.contacto).subscribe(
        data => {

          console.log(data);
          
        },
        err => {
          console.log(err);
        }
      ); 
      
    }//enviarCorreo

    

  
  

}
