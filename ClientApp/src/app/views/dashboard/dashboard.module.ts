import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardService } from 'app/service/dashboard.service';
import { GananciaService } from 'app/service/ganancia.service';
import { DecimalComponent } from './decimal/decimal.component';
import { BarraComponent } from './barra/barra.component';
import { BarraClienteComponent } from './barra-cliente/barra-cliente.component';
import { AuthGuardService } from 'app/services/auth-guard.service';
import { AccountService } from 'app/account/account.service';


@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    
    
  ],
  declarations: [ DashboardComponent, DecimalComponent, BarraComponent, BarraClienteComponent ],
  providers: [DashboardService, GananciaService,AuthGuardService]

 
})

export class DashboardModule {
  
 }
