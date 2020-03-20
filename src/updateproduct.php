<?php

header("Access-Control-Allow-Origin: *");

	$cn =new mysqli("localhost","root","","angular");
	$product_name = $_POST["product_name"];
	$price_before_discount = $_POST["price_before_discount"];
	$discount_amount = $_POST["discount_amount"];
	$price_after_discount = $_POST["price_after_discount"];
	$total_quantity = $_POST["total_quantity"];
	$valid_offer = $_POST["valid_offer"];
	//$offer_id  = $_POST["offer_id"];
	$product_id=$_POST["product_id"];
	
	$flg = $_POST["flg"];
	
	
	
	if($flg == 1)
	{
	

if(!empty($_FILES['file'])){
    
   // echo $username = $_POST["username"];
    
    $ext = pathinfo($_FILES['file']['name'],PATHINFO_EXTENSION);
            $image = time().'.'.$ext;
            move_uploaded_file($_FILES["file"]["tmp_name"], 'images/'.$image);
    //echo $image." successfully uploaded";

}
else
{

 // echo "Invalid File or Empty File";
}

	
	
			echo $query = "UPDATE tbladdproduct SET product_name='$product_name',product_image = '$image',price_before_discount='$price_before_discount',discount_amount='$discount_amount',
				price_after_discount='$price_after_discount', total_quantity='$total_quantity', valid_offer='$valid_offer' where product_id = '$product_id'";
	
	if($cn->query($query))
	{
		$pp[] = array("status" =>"success");
	}
	else
	{
		$pp[]= array("status"=>"fail");
	}
	echo json_encode($pp);
  	
	}
	
	else
	{
		

	
			 $query = "UPDATE tbladdproduct SET product_name='$product_name',price_before_discount='$price_before_discount',discount_amount='$discount_amount',
				price_after_discount='$price_after_discount', total_quantity='$total_quantity', valid_offer='$valid_offer' where product_id = '$product_id'";
	
	if($cn->query($query))
	{
		$pp[] = array("status" =>"success");
	}
	else
	{
		$pp[]= array("status"=>"fail");
	}
	echo json_encode($pp);
  
		
		
		
	}
	
  

?>

