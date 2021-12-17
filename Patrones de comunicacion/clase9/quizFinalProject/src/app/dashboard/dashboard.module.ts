import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormulariosModule } from '../formularios/formularios.module';
import { TablesModule } from '../tables/tables.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormulariosModule,
    TablesModule
  ]
})
export class DashboardModule { }
