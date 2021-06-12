import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { GraficosService } from '../service/graficos.service';
import { GProyectos } from '../models/grafico';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico-proyectos.component.html',
  styleUrls: ['./grafico-proyectos.component.scss']
})

export class GraficoComponent implements OnInit{

  gProyecto: GProyectos[];
  public barChartLabels: Array<Label> = new Array<Label>();
  public barChartData: ChartDataSets = { data: [], label: 'Estado' };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: ChartOptions = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{}], yAxes: [{
        ticks: {
          stepSize: 2,

          min: 0
        }
      }]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    }
  };

  constructor(
    private graficosService: GraficosService,
  ) { }

  ngOnInit() {
    this.graficoProyecto();
  }//ngOnInit

  graficoProyecto(): void {
    let variable: number[] = [];
    this.graficosService.graficoProyectos().subscribe(
      data => {
        this.gProyecto = data;
        this.gProyecto.forEach(ejemplo => {
          variable.push(ejemplo.valor);
          this.barChartLabels.push(ejemplo.nombre);
        });
        this.barChartData =
          { data: variable, label: 'Estado' };
      },
      err => {
        console.log(err);
      }
    );
  }//graficoProyecto

  //eventos
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}