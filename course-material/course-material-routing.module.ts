import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseMaterialComponent } from './course-material.component';

const routes: Routes = [
  {path:'',component:CourseMaterialComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseMaterialRoutingModule { }
