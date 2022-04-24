import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
  { path: 'Login', component:LoginComponent },
  { path: 'Home', component:HomeComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)],
  ]
})
export class AppRoutingModule { }
