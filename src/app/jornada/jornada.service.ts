import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ListaJornadaService {

  listaURL = 'http://localhost:8080/';

  constructor(
    private httpClient: HttpClient
    ) { }


  jornadas(): Observable<any> {
    return this.httpClient.post<any>(this.listaURL + 'api/jornada/jornadaManager',{});
  }

  isIniciada():Observable<any>{
    return this.httpClient.get<any>(this.listaURL+ 'api/jornada/isIniciada');
  }

}
