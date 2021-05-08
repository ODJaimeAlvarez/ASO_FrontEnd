import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-jornada',
  templateUrl: './jornada.component.html',
  styleUrls: ['./jornada.component.scss']
})


export class JornadaComponent implements OnInit {

  @ViewChild('empezar') empezar: ElementRef;
  @ViewChild('finalizar') finalizar: ElementRef;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  

}
