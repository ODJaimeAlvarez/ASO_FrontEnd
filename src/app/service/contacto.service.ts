import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { contactUsMail } from '../models/contactUs_mail';


@Injectable({
  providedIn: 'root'
})

export class ContactoService {

  listaURL = 'http://localhost:8080/';

  constructor(
    private httpClient: HttpClient
    ) { }

    
  enviarCorreo(correo: contactUsMail): Observable<any> {
    return this.httpClient.post<any>(this.listaURL + 'api/contacto',correo);
  }
 

}
