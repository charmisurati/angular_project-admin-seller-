import { Component, OnInit, Inject } from '@angular/core';
import{Router} from '@angular/router';
import{HttpClient} from '@angular/common/http';
import{SESSION_STORAGE,WebStorageService} from 'ngx-webstorage-service';

@Component({
  selector: 'app-addoffer',
  templateUrl: './addoffer.component.html',
 
})
export class AddofferComponent implements OnInit {
  public message;
  public imagePath;
  imgURL:any;
  selectedFile:File;
  constructor(private http:HttpClient,private nav:Router,@Inject(SESSION_STORAGE)private storage:WebStorageService) { }
 arr=[];
  ngOnInit() {
  }
  
  onFileChanged(event,files){
    this.selectedFile=event.target.files[0];
    if(files.lenth==0)
    return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload=(_event) =>{
      this.imgURL=reader.result;
    }

  }

  onUpload(f){

    const uploadData=new FormData();
    var offer_name=f.value.offer_name;
    uploadData.append("offer_name",offer_name);
    uploadData.append("company_id",this.storage.get("company_id"));
    uploadData.append('file',this.selectedFile,this.selectedFile.name);

    this.http.post("http://localhost/angular_services/offer.php", uploadData).subscribe(resp=>{

   // alert("hello");
      console.log(resp);
      var dic= resp[0];
      var status= dic["status"];

      
      if(status=="success"){
        alert("Success");

        this.nav.navigateByUrl("/sellerlayout/viewoffer");
      }
      else{
        alert("choose photo");
      }
    })



  }

}
