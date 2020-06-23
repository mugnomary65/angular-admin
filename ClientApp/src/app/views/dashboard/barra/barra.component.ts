import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

import { Label } from 'ng2-charts';
import { GananciaService } from 'app/service/ganancia.service';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent  implements OnInit {
  meses: number[] = [];
  gastos: number[] = [];
  constructor(private gananciasService: GananciaService ) {
   
  }
 

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Jan', 'Feb', 'March', 'Apr','May', 'Jun', 'Jul', 'Aug', 'Sep','Oct', 'Nov','Dic'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data:[], label: 'Gastos' },
    { data: [], label: 'Ganancias' }
  ];

  ngOnInit() {
    this.getGananciasDashboard();

  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      
      (Math.random() * 100),
      
      (Math.random() * 100),
     ];
    this.barChartData[0].data = data;
  }
  getGananciasDashboard(): void{
    this.gananciasService.getGananciasDashboard()
    .subscribe((gananciaData) => { this.meses = gananciaData, console.log('meses:', this.meses),
    this.gananciasService.getGastosDashboard().subscribe(gastosData => {this.gastos = gastosData,
    this.barChartData = [
       { data: this.gastos, label: 'Gastos' },
       { data: this.meses, label: 'Ganancias' }]})});
  }
}


