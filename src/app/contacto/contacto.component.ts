import { Component, OnInit } from '@angular/core';
import { ContactoCorreo } from '../models/contacto-correo';
import { ContactoService } from '../service/contacto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor(
    private contactoService: ContactoService,
    private toastr: ToastrService
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
        this.toastr.success('¡El correo ha sido enviado con éxito! ', '', {
          timeOut: 5000, positionClass: 'toast-top-center'
        });
      },
      err => {
        console.log(err);
      }
    );
  }//enviarCorreo
}
