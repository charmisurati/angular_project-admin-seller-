import { Component, OnInit, Inject } from '@angular/core';
import{Clsproduct} from '../../../classes/clsproduct';
import{SESSION_STORAGE,WebStorageService} from 'ngx-webstorage-service';
import{HttpClient} from '@angular/common/http';
import{CommonService} from '../../../services/common.service';
import{Router} from '@angular/router';
import{ProductserviceService} from '../../../services/productservice.service';
import{Observable} from 'rxjs';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
 
})
export class ViewproductComponent implements OnInit {
  private product:Observable<Clsproduct[]>
  public get allproduct():Observable<Clsproduct[]>{
    return this.product;
  }

  public set allproduct(value: Observable<Clsproduct[]>){
    this.product=value;
  }

  constructor( private nav:Router, private comm:CommonService, private http:HttpClient
    ,@Inject(SESSION_STORAGE)private storage:WebStorageService,private productservice:ProductserviceService)
     { }
  aarlist=[];

  loadDisplay(){
    debugger;
    this.product=this.productservice.GetProduct();
  }


  getdata(){
    var companyid= this.storage.get("company_id");

    this.comm.getproductdata(companyid).subscribe(resp=>{

      this.aarlist=<Clsproduct[]>resp;
      console.log(resp);

     
    })

  }
  
  ngOnInit() {
    this.getdata();
    this.loadDisplay();

    
  }


  deleteproduct(id){
    alert(id);

    this.comm.deleteproductbyid(id).subscribe(resp=>{
      var del= resp[0];
       var status= del["status"];

       if(status=="success")
       {
        alert("success");
         
         this.getdata();

       }
       else{
         alert("Not deleted..")
       }
    })
  }
}
