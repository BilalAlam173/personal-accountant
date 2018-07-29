import { RoutingModule } from './routing/routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AlertModule, AlertService } from 'ngx-alerts';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';

// service
import { DataService } from './shared/services/data.service';
import { AuthenticationService } from './shared/services/authentication.service';
import { AuthGuard } from './shared/guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000 })
  ],
  providers: [
    AuthenticationService,
    DataService,
    AlertService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
