import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', component:LoginComponent },
  { path: 'Login', component:LoginComponent },
  { path: 'Home', component:HomeComponent },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)],
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
