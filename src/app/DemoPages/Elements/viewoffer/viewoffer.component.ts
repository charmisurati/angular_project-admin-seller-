import { Component, OnInit, Inject } from '@angular/core';
import {SESSION_STORAGE,WebStorageService} from 'ngx-webstorage-service';
import{Router} from '@angular/router';
import{HttpClient} from '@angular/common/http';
import{Clsoffer} from '../../../classes/clsoffer';
import {CommonService} from '../../../services/common.service';

@Component({
  selector: 'app-viewoffer',
  templateUrl: './viewoffer.component.html',
  
})
export class ViewofferComponent implements OnInit {

  constructor(private http:HttpClient,private nav:Router,@Inject(SESSION_STORAGE)private storage:WebStorageService,private comm:CommonService) { }
  
  arr = new Array<Clsoffer>();
 
  getdata(){

    var companyid= this.storage.get("company_id");
    this.comm.getofferdata(companyid).subscribe(resp=>{
      this.arr=<Clsoffer[]>resp;
    });
  } 
  
  ngOnInit() {
 this.getdata();

  }

  deleteOffer(id){
     alert(id);
    this.comm.deleteofferbyid(id).subscribe(resp=>{
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
