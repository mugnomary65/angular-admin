// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardsComponent } from './cards.component';

// Forms Component
import { FormsComponent } from './forms.component';

import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsComponent } from './tabs.component';

// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselsComponent } from './carousels.component';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CollapsesComponent } from './collapses.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoversComponent } from './popovers.component';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PaginationsComponent } from './paginations.component';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ProgressComponent } from './progress.component';

// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TooltipsComponent } from './tooltips.component';

// navbars
import { NavbarsComponent } from './navbars/navbars.component';

// Components Routing
import { BaseRoutingModule } from './base-routing.module';
import { ClienteComponent } from './cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { listclientesComponent } from './listclientes.component';
import { listProductComponent } from './listProduct.component';
import { ClienteService } from './cliente.service';
import {HttpClientModule} from '@angular/common/http';
import { ServiceService } from 'app/service.service';
import { EstadoService } from 'app/estado.service';
import { DescriptionService } from 'app/description.service';
import { MyDialog2Component } from './my-dialog2.component';
import { FilterPipe } from 'app/pipes/filter.pipe';
import { FilerServiciosPipe } from 'app/pipes/filer-servicios.pipe';
import { AlertComponent } from './alert.component';
import { AlertModule } from './alert.module';
import { AlertService } from './alert.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { DashboardService } from 'app/service/dashboard.service';
import { AccountService } from 'app/account/account.service';
import { AuthGuardService } from 'app/services/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaseRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    AlertModule,
    NgxPaginationModule
  
     ],
  declarations: [
    CardsComponent,
    FormsComponent,
    ClienteComponent,
    
    SwitchesComponent,
    TablesComponent,
    TabsComponent,
    CarouselsComponent,
    CollapsesComponent,
    PaginationsComponent,
    PopoversComponent,
    ProgressComponent,
    TooltipsComponent,
    NavbarsComponent,
    listclientesComponent,
    listProductComponent,
    MyDialog2Component,
    FilterPipe,
    FilerServiciosPipe,
   


  
    
  

  ], 
  entryComponents:[ClienteComponent],
  providers:[ClienteService,ServiceService,EstadoService, DescriptionService,AlertService, AccountService, AuthGuardService]
 
})
export class BaseModule { }
