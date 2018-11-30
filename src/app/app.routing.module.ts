import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminRegistrationComponent } from './admin/admin-registration/admin-registration.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

const appRoutes: Routes = [
    { path: ' ', component: AppComponent },
    { path: 'admin-login', component: AdminLoginComponent },
    { path: 'admin-registration', component: AdminRegistrationComponent },
    { path: 'admin-dashboard', component: AdminDashboardComponent  }
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ],
    providers: []
  })
  export class AppRoutingModule { }