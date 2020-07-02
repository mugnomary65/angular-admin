import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';


import { NavbarsComponent } from './navbars/navbars.component';
import {ClienteComponent } from './cliente.component';
import {listclientesComponent } from './listclientes.component';
import {listProductComponent } from './listProduct.component';
import { ClienteService } from './cliente.service';
import { AuthGuardService } from 'app/services/auth-guard.service';
import { AccountService } from 'app/account/account.service';
import { MyDialog2Component } from './my-dialog2.component';
import { AlertComponent } from './alert.component';
import { AlertService } from './alert.service';
import { GuardsGuard } from 'app/shared/guards.guard';
import { AuthInterceptorService } from 'app/services/auth-interceptor.service';
import { LogInterceptorService } from 'app/services/log-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';

const routes: Routes = [
  
  /*  path: '',
    data: {
      title: 'Base'
    },
  //  canActivate: [AuthGuardService],
    children: [*/
   
      {
        path: '',
        redirectTo: 'cards'
      },
    
      {
        path: 'crearservicio',
        component: MyDialog2Component,
     
        data: {
          title: 'Crear servicio'
        }
      },
      {
        path: 'editarservicio/:id',
        component: MyDialog2Component,
      
      },
   
      {
        path: 'crearcliente',
        component: ClienteComponent,
      
        data: {
          title: 'Cliente'
        }
      },
      {
        path: 'editarcliente/:id',
        component: ClienteComponent,
      
      },
      {
        path: 'listclients',
        
        component: listclientesComponent,
       
        data: {
          title: 'Lista'
        }
      },
      
      {
        path: 'listservices',
        
        component: listProductComponent,
       
        data: {
          title: 'Servicio'
        }
      },
         
   
  //  ]
    
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ClienteService, AuthGuardService, AccountService, AuthInterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }],
  
  
 
})
export class BaseRoutingModule {}
