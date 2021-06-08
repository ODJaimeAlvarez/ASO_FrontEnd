import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { GraficosService } from '../service/graficos.service';
import { GProyectos } from '../models/grafico';

@Component({
  selector: 'app-grafico-usuarios',
  templateUrl: './grafico-log-usuarios.component.html',
  styleUrls: ['./grafico-log-usuarios.component.scss']
})

export class GraficoUsuariosComponent implements OnInit {

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  gProyecto: GProyectos[];

  constructor(
    private graficosService: GraficosService
  ) { }

  ngOnInit(): void { }

  graficoLUsuarios(): void {    
    let variable : number[] = [];
      this.graficosService.graficoLogUsuarios().subscribe(
        data => {
          this.gProyecto = data;
          this.gProyecto.forEach(ejemplo => {
            variable.push(ejemplo.valor);
            //this.barChartLabels.push(ejemplo.nombre);  
        });
        /*this.barChartData = 
          {data: variable, label: 'Estado'};
          console.log(this.barChartData);*/
        },
        err => {
          console.log(err);
        }
      );
  }//graficoLUsuarios

  public lineChartData: ChartDataSets[] = [
    { data: [28, 48, 40, 19, 46, 27, 50], label: 'Series B' },
    { data: [180, 180, 770, 90, 100, 170, 100], label: 'Series C', yAxisID: 'y-axis-1' }
  ];

  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    maintainAspectRatio: false,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
          },
          ticks: {
            
          }
        }
      ]
    },
    annotation: {

    },
  };

  public lineChartColors: Color[] = [
    { //azul
      backgroundColor: 'rgba(63,180,250,0.5)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { //rosa
      backgroundColor: 'rgba(255,99,132,0.7)',
      borderColor: 'rgba(255,99,132)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';

  // eventos
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
