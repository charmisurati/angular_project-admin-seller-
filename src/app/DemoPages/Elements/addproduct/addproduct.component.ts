import { Component, OnInit, Inject } from '@angular/core';
import{Offerclass} from '../../../classes/offerclass';
import{HttpClient} from '@angular/common/http';
import{Router} from '@angular/router';
import{CommonService} from '../../../services/common.service';
import{SESSION_STORAGE,WebStorageService} from 'ngx-webstorage-service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  
})
export class AddproductComponent implements OnInit {

  heading = 'Standard Buttons';
  subheading = 'Wide selection of buttons that feature different styles for backgrounds, borders and hover options!';
  icon = 'pe-7s-plane icon-gradient bg-tempting-azure';

  progress: boolean | number = false;

  model = {
    left: true,
    middle: false,
    right: false
  };
  
  startLoading() {
    this.progress = 0; // starts spinner

    setTimeout(() => {
      this.progress = 0.5; // sets progress bar to 50%

      setTimeout(() => {
        this.progress = 1; // sets progress bar to 100%

        setTimeout(() => {
          this.progress = false; // stops spinner
        }, 200);
      }, 500);
    }, 400);
  }


  constructor(private http:HttpClient, private nav:Router,private comm:CommonService,@Inject(SESSION_STORAGE) private storage :WebStorageService){}
  aarlist=[];
  selectedFile:File;
  public message:string;
  public imagePath;
  imgURL:any;
  



  ngOnInit() {

     var company_id = this.storage.get("company_id");
     console.log(company_id);
     this.comm.getofferdata(company_id).subscribe(resp=>{
       this.aarlist=<Offerclass[]>resp;
       console.log(resp);
     })
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

  addproduct(f) {
    
    const uploadData = new FormData();
  var offername= f.value.offer_name;
  var company_id = f.value.company_id;
	var product_name  = f.value.product_name;
	var offer_id  = f.value.offer_id;
	var product_image  = f.value.product_image;
	var price_before_discount  = f.value.price_before_discount;
  var discount_amount  = f.value.discount_amount;
  var price_after_discount   = f.value.price_after_discount;
	var total_quantity  = f.value.total_quantity;
	var valid_offer  = f.value.valid_offer;
	
    uploadData.append("offername",offername);
    uploadData.append("product_name",product_name);
    uploadData.append("offer_id",offer_id);
    uploadData.append("product_image",product_image);
    uploadData.append("price_before_discount",price_before_discount);
    uploadData.append("discount_amount",discount_amount);
    uploadData.append("price_after_discount",price_after_discount);
    uploadData.append("total_quantity",total_quantity);
    uploadData.append("valid_offer",valid_offer);
    uploadData.append("company_id",this.storage.get("company_id"));
    
    uploadData.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post("http://localhost/angular_services/addproduct.php", uploadData)
      .subscribe(res=>{
        
        console.log(res); 

        var dic= res[0];
        var status= dic["status"];

        
        if(status=="success"){
          alert("Success");
          this.nav.navigateByUrl("sellerlayout/viewproduct");

        }
        else{
          alert("Invalid input..");
        }
        
      });
  
  }

}
