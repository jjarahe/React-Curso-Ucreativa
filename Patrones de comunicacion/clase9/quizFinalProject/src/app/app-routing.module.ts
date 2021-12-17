import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login-router.module').then(LoginModule => LoginModule.LoginRoutingModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard-router.module').then(DashboardModule => DashboardModule.DashBoardRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
