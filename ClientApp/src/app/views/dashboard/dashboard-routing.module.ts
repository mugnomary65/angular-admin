import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AuthGuardService } from 'app/services/auth-guard.service';
import { GuardsGuard } from 'app/shared/guards.guard';
import { AccountService } from 'app/account/account.service';
import { AuthInterceptorService } from 'app/services/auth-interceptor.service';
import { LogInterceptorService } from 'app/services/log-interceptor.service';

const routes: Routes = [
  {
    path: '',
   
    component: DashboardComponent,
   
    data: {

      title: 'Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

 
})
export class DashboardRoutingModule {}
