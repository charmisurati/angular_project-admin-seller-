import { Component, OnInit } from '@angular/core';
import{Clsreg} from '../../../classes/clsreg';
import{HttpClient} from '@angular/common/http';
import{Router} from '@angular/router';
import{CommonService} from '../../../services/common.service';

@Component({
  selector: 'app-register-boxed',
  templateUrl: './register-boxed.component.html',
  styles: []
})
export class RegisterBoxedComponent implements OnInit {

  constructor(private http:HttpClient,private route:Router,private comm:CommonService) { }

  
  ngOnInit() {
  }
  signup(form){

    var reg=new Clsreg();
    reg.username=form.username;
    reg.email=form.email;
    reg.password=form.password;
    reg.mobile=form.mobile;
    reg.address=form.address;

    this.comm.getsignup(reg).subscribe(resp=>{
      console.log(resp);
      var respones= resp[0];
      var status=respones["status"];
      if(status=="success"){
        alert("You have successfully created your acoount");
        this.route.navigateByUrl("sellerlayout");
      }
      else{
        alert("Invalid field");
      }
    })


  }
}
