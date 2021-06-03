import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { GraficosService } from '../service/graficos.service';
import { GProyectos } from '../models/graficoProyectos';
import { Proyectos } from '../models/proyectos';
import { ListaProyectosService } from '../service/lista-proyectos.service';
import { min, minutesToHours } from 'date-fns';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})
export class GraficoComponent  {

  constructor(
    private graficosService: GraficosService,
    
  ){}

  gProyecto: GProyectos[];

  graficoProyecto(): void {    
    let variable : number[] = [];
    this.graficosService.graficoProyectos().subscribe(
      data => {
        this.gProyecto = data;
        this.gProyecto.forEach(ejemplo => {
        
          variable.push(ejemplo.valor);
          this.barChartLabels.push(ejemplo.nombre);
          
      });
      this.barChartData = 
        { data: variable, label: 'Estado'};
        console.log(this.barChartData);
      },
      err => {
        console.log(err);
      }
    );
  }//listaProyectos

  /*public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];*/


  ngOnInit() {
    this.graficoProyecto();
  }

  public barChartLabels: Array<Label>= new Array<Label>();
  public barChartData: ChartDataSets;

  public barChartOptions: ChartOptions = {
    maintainAspectRatio: false,
    scales: { xAxes: [{}], yAxes: [{}], ticks: {minor: {beginAtZero : false}}},
    plugins: {
      ticks: {
        beginAtZero: false,
        min: 1,
        suggestedMin: 0
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    }
  };
  
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  //public barChartPlugins = [pluginDataLabels];

 

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
