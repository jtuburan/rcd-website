import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import {MatInputModule} from '@angular/material';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { AdminRegistrationComponent } from './admin/admin-registration/admin-registration.component';


const appRoutes: Routes = [
  { path: ' ', component: AppComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-registration', component: AdminRegistrationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminRegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
