import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';


import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';



const APP_CONTAINERS = [
  DefaultLayoutComponent,
 
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClienteService } from './views/base/cliente.service';
import {HttpClientModule,HttpClient,HttpHandler} from '@angular/common/http';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { EstadoService } from './estado.service';
import { ServiceService } from './service.service';
import { EditarServicioComponent } from './editar-servicio/editar-servicio.component';
import { DescriptionService } from './description.service';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import html2canvas from 'html2canvas';
import pdfFonts from "pdfmake/build/vfs_fonts"; // fonts provided for pdfmake
import {pdfmake} from 'pdfmake';
import { from } from 'rxjs';
import { AccountService } from './account/account.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { pathToFileURL } from 'url';
import { DashboardService } from './service/dashboard.service';
import { DecimalPipe } from './pipes/decimal.pipe';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GuardsGuard } from './shared/guards.guard';
import { LogInterceptorService } from './services/log-interceptor.service';





// Set the fonts to use
PdfMakeWrapper.setFonts(pdfFonts);
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    NgbModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxChartsModule,
    

       

    ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,  
    LoginComponent,
    RegisterComponent,
  
    EditarClienteComponent,
    EditarServicioComponent,

    RegisterComponent,

    DecimalPipe,

  ],
  
  entryComponents:[EditarClienteComponent, EditarServicioComponent],
  
  providers: [
    ClienteService,
    EstadoService,
    ServiceService,
    DescriptionService,
    AuthGuardService, AccountService,
    
  
    
   ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
  
 
 }
 /*export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}*/