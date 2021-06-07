import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { contactoCorreo } from '../models/contactoCorreo';


@Injectable({
  providedIn: 'root'
})

export class ContactoService {

  listaURL = 'http://localhost:8080/';

  constructor(
    private httpClient: HttpClient
    ) { }

    
  enviarCorreo(correo: contactoCorreo): Observable<any> {
    return this.httpClient.post<any>(this.listaURL + 'api/contacto',correo);
  }
 

}
