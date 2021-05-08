import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-jornada',
  templateUrl: './jornada.component.html',
  styleUrls: ['./jornada.component.scss']
})


export class JornadaComponent implements OnInit {

  visibilidad: boolean;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  iniciarJornada() {
      this.visibilidad=true;
  }  

  finalizarJornada() {
    this.visibilidad=false;
  }

}
