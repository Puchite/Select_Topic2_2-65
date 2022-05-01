import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/student/register/register.component';
import { DropComponent } from './component/student/drop/drop.component';
import { CheckRegisterComponent } from './component/student/check-register/check-register.component';
import { HomeRoutingModule } from './component/home/home-routing.module';
import { BioComponent } from './component/student/bio/bio.component';
import { MaterialModule } from './material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { CheckGradeComponent } from './component/student/check-grade/check-grade.component';
import { EditGradeComponent } from './component/instructor/edit-grade/edit-grade.component';
import { EditCourseComponent } from './component/instructor/edit-course/edit-course.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    DropComponent,
    CheckRegisterComponent,
    BioComponent,
    CheckGradeComponent,
    EditGradeComponent,
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HomeRoutingModule,
    HttpClientModule,
    MaterialModule,
    NoopAnimationsModule,
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
