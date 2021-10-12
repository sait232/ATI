import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployerDetailsRoutingModule } from './employer-details-routing.module';
import { EmployerDetailsComponent } from './employer-details.component';


@NgModule({
  declarations: [
    EmployerDetailsComponent
  ],
  imports: [
    CommonModule,
    EmployerDetailsRoutingModule
  ]
})
export class EmployerDetailsModule { }
