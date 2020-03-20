<?php

header("Access-Control-Allow-Origin: *");

	$cn =new mysqli("localhost","root","","angular");
	
	$company_id  = $_POST["company_id"];
	$product_name  = $_POST["product_name"];
	$offer_id  = $_POST["offer_id"];
	//$product_image  = $_POST["product_image"];
	$price_before_discount  = $_POST["price_before_discount"];
	$discount_amount  = $_POST["discount_amount"];
	$price_after_discount = $_POST["price_after_discount"];
	$total_quantity  = $_POST["total_quantity"];
	$valid_offer  = $_POST["valid_offer"];
	
	
	
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

	
	
	$query = "insert into tbladdproduct (company_id,product_name,offer_id ,product_image,price_before_discount,discount_amount,price_after_discount,total_quantity ,valid_offer )
	values('$company_id','$product_name','$offer_id','$image','$price_before_discount','$discount_amount','$price_after_discount','$total_quantity','$valid_offer')";
	
	
	if($cn->query($query))
	{
		$pp[] = array("status" =>"success");
	}
	else
	{
		$pp[]= array("status"=>"fail");
	}
	echo json_encode($pp);
  
  /*   $qu = "select * from tblemp";
    
     $rows = $con->query($qu);

    while($row = $rows->fetch_assoc())
     {
        $pp[]  = $row;
        
     }
    
    echo json_encode($pp);
   */

?>

