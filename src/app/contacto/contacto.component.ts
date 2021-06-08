import { Component, OnInit } from '@angular/core';
import { ContactoCorreo } from '../models/contacto-correo';
import { ContactoService } from '../service/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor(
    private contactoService: ContactoService
  ) { }

  ngOnInit(): void { }

  correo: string;
  asunto: string;
  mensaje: string;
  contacto: ContactoCorreo;

  enviarCorreo(): void {
    this.contacto = {
      correo: this.correo,
      asunto: this.asunto,
      mensaje: this.mensaje
    }
    this.contactoService.enviarCorreo(this.contacto).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }//enviarCorreo
}
