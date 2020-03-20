import { Component, OnInit } from '@angular/core';
import{LOCAL_STORAGE,StorageService} from 'ngx-webstorage-service';
import{Clsproduct} from '../../../classes/clsproduct';
import{ActivatedRoute,Router} from '@angular/router';
import{CommonService} from '../../../services/common.service';


@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  
})
export class EditproductComponent implements OnInit {

  constructor( private rout:ActivatedRoute,private nav:Router,private comm:CommonService) { }
  
  flg = 0;
   selectedFile:File;
  offer_id:string;
  product_name:string;
  price_before_discount:number;
  discount_amount:number;
  price_after_discount:number;
  total_quantity:number;
  valid_offer:number;
  imgURL:any;
  public imgPath;
public product_id;

  arr = new Array<Clsproduct>();

  ngOnInit() {

     this.product_id=this.rout.snapshot.params["product_id"];
    
    this.comm.getproductbyid(this.product_id).subscribe(resp=>{
      console.log(resp);
      this.arr=<Clsproduct[]>resp;

      this.offer_id=this.arr[0].offer_id;
      this.product_name=this.arr[0].product_name;
      this.discount_amount=this.arr[0].discount_amount;
      this.total_quantity=this.arr[0].total_quantity;
      this.valid_offer=this.arr[0].valid_offer;
      this.price_after_discount=this.arr[0].price_after_discount;
      this.price_before_discount=this.arr[0].price_before_discount;
      this.imgURL="http://localhost/angular_services/images/"+this.arr[0].product_image;

    
  });
  
  

  }

  onFileChanged(event,files){

    this.flg = 1;
      this.selectedFile=event.target.files[0];
      if(files.length==0)
        return;

        var reader= new FileReader();
        this.imgPath=files;
        reader.readAsDataURL(files[0]);
        reader.onload=(_event)=>{
          this.imgURL=reader.result;
        }


  }

  onUpload(f){
    const uploadData= new FormData();
    var product_name=f.value.product_name;
    var price_before_discount=f.value.price_before_discount;
    var total_quantity=f.value.total_quantity;
    var price_after_discount=f.value.price_after_discount;
    var discount_amount=f.value.discount_amount;
    var valid_offer=f.value.valid_offer;
    var offer_id=f.value.offer_id;

    uploadData.append("product_name",product_name);
    uploadData.append("price_before_discount",price_before_discount);
    uploadData.append("total_quantity", total_quantity);
    uploadData.append("price_after_discount",price_after_discount);
    uploadData.append("discount_amount", discount_amount);
    uploadData.append("valid_offer",valid_offer);
    uploadData.append("offer_id",offer_id);
    uploadData.append("product_id",this.product_id);
    if(this.flg == 0)
    {

    }
    else
    {
      uploadData.append("file",this.selectedFile,this.selectedFile.name);

    }
    
    uploadData.append("flg",this.flg.toString());
    this.comm.updateproduct(uploadData).subscribe(resp=>{
      console.log(resp);
      var dic=resp[0];
      var status=dic["status"];
       if(status=="success")
       {
         alert("update sucessfully..")
         this.nav.navigateByUrl("/sellerlayout/viewproduct");
       }
       else{
         alert("update failed..");
       }
    })

  }
}
