import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

import { Label } from 'ng2-charts';
import { CantclientesService } from 'app/service/cantclientes.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-barra-cliente',
  templateUrl: './barra-cliente.component.html',
  styleUrls: ['./barra-cliente.component.css']
})
export class BarraClienteComponent implements OnInit {
  meses1: number[] = [];
  clientes: number[] = [];
  constructor(private clientesService: CantclientesService ) {
   
  }
 

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
       
      }
    }
  };
  public barChartLabels: Label[] = ['Jan', 'Feb', 'March', 'Apr','May', 'Jun', 'Jul', 'Aug', 'Sep','Oct', 'Nov','Dic'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data:[], label: '' },
    { data:[], label: 'Clients' },
    
  ];

  ngOnInit() {
    this.getClientesDashboard();

  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  
  getClientesDashboard(): void{
    this.clientesService.getGClientesDashboard()
    .subscribe((cleint) => { this.meses1 = cleint, console.log('meses:', this.meses1),
    this.barChartData = [
      { data: [], label: '',
    }, 
      { data: this.meses1, label: 'Clients',
       }
      
       ]})
      }
  
}

