import { Component, OnInit, Inject } from '@angular/core';
import{FormGroup, FormBuilder, Validators} from '@angular/forms';
import{SESSION_STORAGE,WebStorageService} from 'ngx-webstorage-service';
import{Offerclass} from '../../../classes/offerclass';
import{CommonService} from '../../../services/common.service';
import{HttpClient} from '@angular/common/http';
import{Router} from '@angular/router';

@Component({
  selector: 'app-addproductbyreactive',
  templateUrl: './addproductbyreactive.component.html',
  
})
export class AddproductbyreactiveComponent implements OnInit {

  regForm:FormGroup;
  aarlist=[];
  selectedFile:File;
  public message:string;
  public imagePath;
  imgURL:any;
    constructor(private formbuilder:FormBuilder,@Inject(SESSION_STORAGE) private storage:WebStorageService,private comm:CommonService,private http:HttpClient,private nav:Router) { }


    bindoffer(){
      var company_id = this.storage.get("company_id");
      console.log(company_id);
      this.comm.getofferdata(company_id).subscribe(resp=>{
        this.aarlist=<Offerclass[]>resp;
        console.log(resp);
      })
    }
  ngOnInit() {

    this.regForm=this.formbuilder.group({

      p_name:['',[Validators.required,Validators.email]],
      offer_id:[''],
      price_before_discount:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
      discount_amount:[''],
      price_after_discount:[''],
      total_qty:[''],
      valid_offer:[''],
      p_image:['']


    })
    this.bindoffer();

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
  addproduct(){
    alert(JSON.stringify(this.regForm.value));
    const uploadData = new FormData();
  
  var company_id =this.regForm.value.company_id;
	var product_name  = this.regForm.value.p_name;
	var offer_id  = this.regForm.value.offer_id;
//	var product_image  = this.regForm.value.product_image;
	var price_before_discount  = this.regForm.value.price_before_discount;
  var discount_amount  = this.regForm.value.discount_amount;
  var price_after_discount   = this.regForm.value.price_after_discount;
	var total_quantity  =this.regForm.value.total_qty;
	var valid_offer  =this.regForm.value.valid_offer;
	
   
    uploadData.append("product_name",product_name);
    uploadData.append("offer_id",offer_id);
    //uploadData.append("product_image",product_image);
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
          this.nav.navigateByUrl("/sellerlayout/viewproductbyreactive");

        }
        else{
          alert("Invalid input..");
        }
        
      });
  
  }


  

}
