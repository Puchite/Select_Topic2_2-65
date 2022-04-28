import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BioComponent } from './../bio/bio.component';
import { LoginComponent } from './../login/login.component';
import { HomeComponent } from './home.component';
import { RegisterComponent } from '../register/register.component';
import { DropComponent } from '../drop/drop.component';
import { CheckRegisterComponent } from '../check-register/check-register.component';

const routes: Routes = [
  { path: 'Home', component:HomeComponent,
    children:[
      { path: 'Register', component:RegisterComponent },
      { path: 'Drop', component:DropComponent },
      { path: 'CheckRegister', component:CheckRegisterComponent },
      { path: 'Bio', component:BioComponent },
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
