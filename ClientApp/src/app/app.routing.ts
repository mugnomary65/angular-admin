import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { listclientesComponent } from './views/base/listclientes.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AuthGuardService } from './services/auth-guard.service';
import { GuardsGuard } from './shared/guards.guard';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { LogInterceptorService } from './services/log-interceptor.service';
import { AccountService } from './account/account.service';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: 'cliente-editar',
    component: EditarClienteComponent
 
  },
 
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
 
   
  {
    path: '',
   
    component: DefaultLayoutComponent,
   
    data: {
      title: 'Home'
    },

    children: [
      {
        path: 'base',
        //canActivate: [AuthGuardService],
        
        
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'dashboard',
       // canActivate: [AuthGuardService],
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      
    
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [AuthGuardService, AccountService, AuthInterceptorService,
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


export class AppRoutingModule {}
