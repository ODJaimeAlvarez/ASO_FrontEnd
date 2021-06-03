import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';


@Component({
  selector: 'app-grafico-usuarios',
  templateUrl: './grafico-usuarios.component.html',
  styleUrls: ['./grafico-usuarios.component.scss']
})
export class GraficoUsuariosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
}
