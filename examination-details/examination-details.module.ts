import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExaminationDetailsRoutingModule } from './examination-details-routing.module';
import { ExaminationDetailsComponent } from './examination-details.component';


@NgModule({
  declarations: [
    ExaminationDetailsComponent
  ],
  imports: [
    CommonModule,
    ExaminationDetailsRoutingModule
  ]
})
export class ExaminationDetailsModule { }
