import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLServidor } from '../models/url-servidor';
import { contactoCorreo } from '../models/contactoCorreo';


@Injectable({
  providedIn: 'root'
})

export class ContactoService {

  rutaLocal = 'http://localhost:8080/';
  rutaServidor: URLServidor;

  constructor(
    private httpClient: HttpClient
    ) { }

    
  enviarCorreo(correo: contactoCorreo): Observable<any> {
    return this.httpClient.post<any>(this.rutaLocal + 'api/contacto',correo);
  }
 

}
