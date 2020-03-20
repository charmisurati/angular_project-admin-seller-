import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router';
import{CommonService} from '../../../services/common.service';
import{Offerclass} from '../../../classes/offerclass';
@Component({
  selector: 'app-editoffer',
  templateUrl: './editoffer.component.html',
 
})
export class EditofferComponent implements OnInit {

  constructor(private nav:Router,private comm:CommonService,private rout:ActivatedRoute) { }
  public imagePath;
  imgURL: any;
  public message: string;
  selectedFile:File; 
  off_id :number;
  off_name:string;
      obj1:{};
      arr = new Array<Offerclass>();

  ngOnInit() {
    var offerid = this.rout.snapshot.params["offerid"];
    this.comm.getofferbyid(offerid).subscribe(resp=>{

      console.log(resp);
       this.arr =  <Offerclass[]>resp;
        this.off_id = this.arr[0].offer_id;
        this.off_name = this.arr[0].offer_name;
        this.imgURL = "http://localhost/angular_services/images/"+this.arr[0].offer_image
      
   });

  }

  onFileChanged(event,files) {

    this.selectedFile = event.target.files[0]
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
  onUpload(f) {
   
    const uploadData = new FormData();
    var offername1= f.value.offername1
    var offerid1 = f.value.offerid1;
    uploadData.append("offer_name",offername1);
    uploadData.append("offer_id",offerid1);

    
    console.log(offerid1);
    console.log(offername1);

    uploadData.append('file', this.selectedFile, this.selectedFile.name);
    this.comm.updateoffer(uploadData).subscribe(resp=>{

      console.log(resp);
      var dic= resp[0];
      var status= dic["status"];

      if(status == "success"){

        alert("successfully updated..");
       
         this.nav.navigateByUrl("/sellerlayout/viewoffer");
         
      }
      else{

        alert("Not updated..");


      }                                                                                                                                                                                                                                 
      

    });
    
  
  }

}
