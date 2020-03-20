<?php

    header("Access-Control-Allow-Origin: *");
	$cn =new mysqli("localhost","root","","angular");
    
    $product_id  = $_REQUEST["product_id"];
     $query1 = "DELETE FROM tbladdproduct WHERE product_id='$product_id'"; 
    if($cn->query($query1))
	{
		$pp[] = array("status" =>"success");
	}
	else
	{
		$pp[]= array("status"=>"fail");
	}
	echo json_encode($pp);
    
   

?>
