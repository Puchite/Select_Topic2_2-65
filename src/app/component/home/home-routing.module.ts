import { ViewCourseComponent } from './../instructor/view-course/view-course.component';
import { EditGradeComponent } from './../instructor/edit-grade/edit-grade.component';
import { EditCourseComponent } from './../instructor/edit-course/edit-course.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BioComponent } from '../student/bio/bio.component';
import { LoginComponent } from './../login/login.component';
import { HomeComponent } from './home.component';
import { RegisterComponent } from '../student/register/register.component';
import { DropComponent } from '../student/drop/drop.component';
import { CheckRegisterComponent } from '../student/check-register/check-register.component';

const routes: Routes = [
  { path: 'Home', component:HomeComponent,
    children:[
      //Student
      { path: 'Register', component:RegisterComponent},
      { path: 'Drop', component:DropComponent },
      { path: 'CheckRegister', component:CheckRegisterComponent },
      { path: 'Bio', component:BioComponent },

      //instuctor
      { path: 'View-Course', component:ViewCourseComponent },
      { path: 'Edit-Course', component:EditCourseComponent },
      { path: 'Edit-Grade', component:EditGradeComponent },
    ]
  },
  { path: '', component:LoginComponent },
  // { path: 'Register', component:RegisterComponent },
  // { path: 'Drop', component:DropComponent },
  // { path: 'CheckRegister', component:CheckRegisterComponent },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
