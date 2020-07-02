// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';


// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';


// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';


// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';


// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PaginationsComponent } from './paginations.component';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';


// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';


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
  
    ClienteComponent,   
    PaginationsComponent,   
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
