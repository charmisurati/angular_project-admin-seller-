import { Component, OnInit, Inject } from '@angular/core';
import{Clsseller} from '../../../classes/clsseller';
import{CommonService} from '../../../services/common.service';
import{SESSION_STORAGE,WebStorageService} from 'ngx-webstorage-service';
import{Router} from '@angular/router';
import{Observable} from "rxjs";


@Component({
  selector: 'app-displayseller',
  templateUrl: './displayseller.component.html',
 
})
export class DisplaysellerComponent implements OnInit {

  private display:Observable<Clsseller[]>
  public get displayseller():Observable<Clsseller[]>{
    return this.display;
  }

  public set displayseller(value:Observable<Clsseller[]>){
    this.display=value;

  }

  constructor(private nav:Router,@Inject(SESSION_STORAGE)private storage:WebStorageService,private comm:CommonService) { }
  
  aarlist=new Array<Clsseller>();
  

loadDisplay(){
  debugger;
  this.display=this.comm.Getseller();
}
  getapprove(){

    
    var id=this.storage.get("id");
    this.comm.getsellerdata(id).subscribe(resp=>{
      this.aarlist=<Clsseller[]>resp;
    

    })
  }
  ngOnInit() {
      this.getapprove();
      this.loadDisplay();
  }


  approveseller(id,i){
    if(this.aarlist[i].status==1)
 {
   alert("seller already approved..");
  return 0;
 }   
 
 
    this.comm.approveseller(id).subscribe(resp=>{
       
      
      console.log(resp);
      var dic= resp[0];

      var status= dic["status"];


      if(status == "success"){

        alert("successfully approved..");
        this.getapprove();
       
         
      }
      else{

        alert("Not updated..");


      }                                                                                                                                                                                                                                 
      

    });
  }

  block(id,i){
   

    if(this.aarlist[i].status==0)
    {
      alert("seller already blocked..");
     return 0;
    }   
    this.comm.blockseller(id).subscribe(resp=>{
      console.log(resp);
      var dic=resp[0];
      var status=dic["success"];
      if(status=="success")
      {
        alert("failed..");
       
      }
      else{
       alert("seller blocked..")
       this.getapprove();
      }
    })

  }
}
