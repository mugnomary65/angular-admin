import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { AccountService } from 'app/account/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  constructor(private accountService: AccountService,
    private router: Router) { }


  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  estaLogueado() {
    return this.accountService.estaLogueado();
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiration");
  }
}
