import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLServidor } from '../models/url-servidor';
import { ContactoCorreo } from '../models/contacto-correo';

@Injectable({
  providedIn: 'root'
})

export class ContactoService {

  URL: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.URL = URLServidor.ruta;
  }

  enviarCorreo(correo: ContactoCorreo): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'api/contacto', correo);
  }//enviarCorreo

}
