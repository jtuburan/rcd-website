import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminRegistrationComponent } from './admin/admin-registration/admin-registration.component';

const appRoutes: Routes = [
    { path: ' ', component: AppComponent },
    { path: 'admin-login', component: AdminLoginComponent },
    { path: 'admin-registration', component: AdminRegistrationComponent }
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ],
    providers: []
  })
  export class AppRoutingModule { }