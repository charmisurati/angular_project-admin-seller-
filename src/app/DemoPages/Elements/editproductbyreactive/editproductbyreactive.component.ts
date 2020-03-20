import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder} from '@angular/forms';
import{Router,ActivatedRoute} from '@angular/router';
import{Clsproduct} from '../../../classes/clsproduct';
import{CommonService} from '../../../services/common.service';

@Component({
  selector: 'app-editproductbyreactive',
  templateUrl: './editproductbyreactive.component.html',
  
})
export class EditproductbyreactiveComponent implements OnInit {

  flg = 0;
  selectedFile:File;
 
 imgURL:any;
 public imgPath;
 

 arr = new Array<Clsproduct>();


  editform:FormGroup;
  p_name="";
  offer_id="";
  product_id="";
  price_before_discount="";
  discount_amount="";
  price_after_discount="";
  total_qty="";
  valid_offer="";
  p_image="";

obj={};


  constructor(private formbuilder:FormBuilder,private rout:ActivatedRoute,private comm:CommonService,private nav:Router) { }

 ngOnInit(){
   
   
  

  this.rout.queryParamMap.subscribe(params=>{
    this.obj={...params.keys, ...params};
    console.log(this.obj);
    var ss= this.obj["params"];
   
    this.product_id=this.obj["product_id"];
    this.p_name=ss["product_name"];
    this.offer_id=ss["offer_id"];
    this.price_before_discount=ss["price_before_discount"];
    this.discount_amount=ss["discount_amount"];
   
    this.price_after_discount=ss["price_after_discount"];
    this.total_qty=ss["total_qty"];
    this.valid_offer=ss["valid_offer"];
    this.p_image=ss["product_image"];

    

    this.editform=this.formbuilder.group({
      p_name:[this.p_name],
      offer_id:[this.offer_id],
      price_before_discount:[this.price_before_discount],
      price_after_discount:[this.price_after_discount],
      discount_amount:[this.discount_amount],
      product_id:[this.product_id],
      total_qty:[this.total_qty],
      valid_offer:[this.valid_offer],
      p_image:[this.p_image]
     
    });
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

 onUpload(){
  const uploadData= new FormData();
  var product_name=this.editform.value.product_name;
  var price_before_discount=this.editform.value.price_before_discount;
  var total_qty=this.editform.value.total_qty;
  var price_after_discount=this.editform.value.price_after_discount;
  var discount_amount=this.editform.value.discount_amount;
  var valid_offer=this.editform.value.valid_offer;
  var offer_id=this.editform.value.offer_id;
  var product_id=this.editform.value.product_id;

  uploadData.append("product_name",product_name);
  uploadData.append("price_before_discount",price_before_discount);
  uploadData.append("total_quantity", total_qty);
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
       this.nav.navigateByUrl("sellerlayout/viewproductbyreactive");
     }
     else{
       alert("update failed..");
     }
  })

}
}
