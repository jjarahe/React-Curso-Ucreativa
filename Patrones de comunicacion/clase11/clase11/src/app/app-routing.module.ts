import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './formularios/form/form.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
                        {
                            path:'login',
                            component: LoginComponent
                        },
                      {
                        path: 'form',
                        component: FormComponent
                      }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
