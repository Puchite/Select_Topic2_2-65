import { Injectable } from '@angular/core';
import {Loginf} from "./../login/loginf"
import {Mockdata} from "./mockdata"
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  datas:Loginf[]=[]
  constructor() {
    this.datas=Mockdata.mockdata_login
   }
   getData():Loginf[]{
      return this.datas;
   }
   addData(f:Loginf){
     this.datas.push(f)
   }
}
