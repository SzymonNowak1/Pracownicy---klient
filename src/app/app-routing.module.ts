import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/guard/auth-guard';
import { ResourceComponent } from 'src/app/resource/resource.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { ConfigurationComponent } from './admin/configuration/configuration.component';
import { UserWorkersComponent } from './admin/user-workers/user-workers.component';
import { AdminGuard } from './auth/guard/admin-guard';
import { UserGuard } from './auth/guard/user-guard';
import { ManagerGuard } from './auth/guard/manager-guard';
import { MyInfoComponent } from './my-info/my-info.component';
import { WorkersComponent } from './manager/workers/workers.component';
import { PositionsComponent } from './manager/positions/positions.component';
import { SalariesComponent } from './manager/salaries/salaries.component';

const routes: Routes = [
  { path: '', component: MoreInfoComponent },
  { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard] },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'myInfo', component: MyInfoComponent, canActivate: [UserGuard] },
  
  { path: 'resource', component: ResourceComponent, canActivate: [UserGuard] },
  
  // { path: 'worker ', bla bla ManagerGuard}

  { path: 'configuration', component: ConfigurationComponent, canActivate: [AdminGuard] },
  { path: 'userworkers', component: UserWorkersComponent, canActivate: [AdminGuard] },

  { path: 'workers', component: WorkersComponent, canActivate: [ManagerGuard] },
  { path: 'positions', component: PositionsComponent, canActivate: [ManagerGuard] },
  { path: 'salaries', component: SalariesComponent, canActivate: [ManagerGuard] },

  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
