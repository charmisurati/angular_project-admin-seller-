import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Clsreg} from '../classes/clsreg';
import{Observable} from "rxjs";
import { Clsseller } from '../classes/clsseller';
import{tap} from "rxjs/operators"
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  

  constructor(private http:HttpClient) { }

  //serach and pagination for display sellers

  Getseller():Observable<Clsseller[]>{
    return this.http.get<Clsseller[]>("http://localhost/angular_services/getsellerdata.php")
    .pipe(
      tap(product => console.log('fetched product'))
      
    )
  } 

  getsignup(obj:Clsreg){
    var reg=new FormData();
    reg.set("username",obj.username);
    reg.set("email",obj.email);
    reg.set("password",obj.password);
    reg.set("mobile",obj.mobile);
    reg.set("address",obj.address);

    return this.http.post("http://localhost/angular_services/signup.php",reg);

  }

  getofferdata(id){
    return this.http.get("http://localhost/angular_services/get_data.php?company_id="+id);

  }
  
  updateoffer(obj:FormData)
  {
    return this.http.post("http://localhost/angular_services/updateoffer.php",obj);
  }
  getofferbyid(id)
  {
    return this.http.get("http://localhost/angular_services/getofferbyid.php?offer_id="+id);
  }
  deleteofferbyid(id){
    return this.http.get("http://localhost/angular_services/deleteoffer.php?offer_id="+id);
  }
  deleteproductbyid(id){
    return this.http.get("http://localhost/angular_services/deleteproduct.php?product_id="+id);

  }
  getproductdata(id){
    return this.http.get("http://localhost/angular_services/get_productdata.php?company_id="+id);
  }
  getproductbyid(id){

    return this.http.get("http://localhost/angular_services/getproductbyid.php?product_id="+id);
  }
  updateproduct(obj:FormData){
    return this.http.post("http://localhost/angular_services/updateproduct.php",obj);
  }

  getsellerdata(id){
    return this.http.get("http://localhost/angular_services/getsellerdata.php");

  }
  approveseller(id){

    var obj= new FormData();
    obj.set("id",id);
    return this.http.post("http://localhost/angular_services/approveseller.php",obj);
  }
  blockseller(id){
    var obj=new FormData();
    obj.set("id",id);
    return this.http.post("http://localhost/angular_services/blockseller.php",obj);
  }

 
}
