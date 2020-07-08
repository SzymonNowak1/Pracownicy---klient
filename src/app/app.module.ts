import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/http/token-interceptor';
import { ErrorInterceptor } from './auth/http/error-interceptor';
import { HomeComponent } from './home/home.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { ConfigurationComponent } from './admin/configuration/configuration.component';
import { UserWorkersComponent } from './admin/user-workers/user-workers.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { WorkersComponent } from './manager/workers/workers.component';
import { PositionsComponent } from './manager/positions/positions.component';
import { SalariesComponent } from './manager/salaries/salaries.component';
import { MySalariesComponent } from './user/my-salaries/my-salaries.component';
import { SalaryTargetsComponent } from './user/salary-targets/salary-targets.component';
import { PaginatorComponent } from './common/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    MoreInfoComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ConfigurationComponent,
    UserWorkersComponent,
    MyInfoComponent,
    WorkersComponent,
    PositionsComponent,
    SalariesComponent,
    MySalariesComponent,
    SalaryTargetsComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
