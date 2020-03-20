import {Component, OnInit, Inject} from '@angular/core';
import {ThemeOptions} from '../../../../../theme-options';
import{SESSION_STORAGE,WebStorageService} from 'ngx-webstorage-service';
import{Router} from '@angular/router';
import{Clsseller} from '../../../../../classes/clsseller';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
})
export class UserBoxComponent implements OnInit {
arr=[];
username="";


  constructor(public globals: ThemeOptions,@Inject(SESSION_STORAGE)private storage:WebStorageService,private nav:Router) {
  
    
  }

  ngOnInit() {
    var company_id=this.storage.get("company_id");
    console.log(company_id);
    this.username=this.storage.get("username");
    console.log(this.username)
   
  }
  logout(){
    if(this.storage)
    this.storage.remove("company_id");
    this.nav.navigateByUrl("/pages/login-boxed");

  }
  


}
