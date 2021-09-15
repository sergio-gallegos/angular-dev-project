import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './_dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardComponent
  ],
  exports: [
    DashboardComponent,
  ],
  declarations: []
})
export class DashboardModule { }