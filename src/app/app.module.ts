import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import {MatInputModule} from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS }   from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module'
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminRegistrationComponent } from './admin/admin-registration/admin-registration.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component'
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { PostListComponent } from './admin/post-list/post-list.component';
import { AuthService } from './admin/auth.service';
import { EventsService } from './admin/post-list/events.service';
import { AuthGuard } from './admin/auth.guard';
import { TokenInterceptorService } from './admin/token-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminRegistrationComponent,
    AdminDashboardComponent,
    AdminHeaderComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatInputModule,
    MatSidenavModule
  ],
  providers: [AuthService, AuthGuard, EventsService,
  {
    provide : HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
