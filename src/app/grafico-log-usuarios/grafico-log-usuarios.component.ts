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
  public lineChartLabels: Array<Label> = new Array<Label>();

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Clientes' },
    { data: [], label: 'Empleados' }
  ];

  constructor(
    private graficosService: GraficosService
  ) { }

  ngOnInit(): void {
    this.graficoLogUsuarios();
  }

  graficoLogUsuarios(): void {
    let variable: number[] = [];
    let variable1: number[] = [];
    this.graficosService.graficoLogEmpleados().subscribe(
      data => {
        this.gProyecto = data;
        this.gProyecto.forEach(ejemplo => {
          variable.push(ejemplo.valor);
          this.lineChartLabels.push(ejemplo.nombre);
        });
      },
      err => {
        console.log(err);
      }
    );
    this.graficosService.graficoLogClientes().subscribe(
      data => {
        this.gProyecto = data;
        this.gProyecto.forEach(ejemplo => {
          variable1.push(ejemplo.valor);
        });
        this.lineChartData =
          [{ data: variable, label: 'Empleados' },
          { data: variable1, label: 'Clientes' }];
        console.log(this.lineChartData);
      },
      err => {
        console.log(err);
      });
  }//graficoLogUsuarios

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-1',
          position: 'left',
          gridLines: {
          },
          ticks: {
            stepSize: 1,
            min: 0,
            max: 10
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
