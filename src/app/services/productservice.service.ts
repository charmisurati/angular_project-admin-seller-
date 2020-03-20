import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable} from "rxjs";
import {tap} from 'rxjs/operators';

import{Clsproduct} from '../classes/clsproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
 

  url:string;

  constructor(private http:HttpClient) {
    this.url='http://localhost/angular_services/';
   }

  GetProduct():Observable<Clsproduct[]>{
    return this.http.get<Clsproduct[]>(this.url+'/getproductbyid.php')
    .pipe(
      tap(product => console.log('fetched product'))
      
    )
  }  
}
