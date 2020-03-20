import { Component, OnInit ,Inject,Injectable} from '@angular/core';
import {Tbladmin} from '../../../classes/tbladmin';
import{Clsseller} from'../../../classes/clsseller';
import{HttpClient} from '@angular/common/http';
import{Router} from '@angular/router';
import{SESSION_STORAGE,WebStorageService} from 'ngx-webstorage-service';


@Component({
  selector: 'app-login-boxed',
  templateUrl: './login-boxed.component.html',
  styles: []
})
export class LoginBoxedComponent implements OnInit {

  list= new Array<Tbladmin>();
  sellerList=new Array<Clsseller>();
  
  constructor( private http:HttpClient,private sst:Router,@Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
  }

  loginaction(f){
    

    console.log(f.value.email);
    console.log(f.value.password);

    var email= f.value.email;
    var password= f.value.password;

    this.http.get("http://localhost/angular_services/admin_login.php?email="+email+"&password="+password+"").subscribe(resp=>{

    console.log(resp);
    this.list=<Tbladmin[]>resp;

    if(this.list.length==1)
    {
      this.sst.navigateByUrl("BaseLayoutComponent");
    }
    else
    {
     this.http.get("http://localhost/angular_services/sellerlogin.php?email="+email+"&password="+password).subscribe(resp=>{
       this.sellerList=<Clsseller[]>resp;
       if(this.sellerList.length>0)
       {

          var obj = this.sellerList[0];
          var username = this.sellerList[0].username;
          // console.log(obj.id);
          // console.log(username);

          // alert(obj.id);
          this.storage.set("company_id",obj.id);
          this.storage.set("username",username);
         this.sst.navigateByUrl("sellerlayout");
       }
       else
       {
         alert ("invalid username and password");
       }
     });
    }
    
  
  })


  }

}
