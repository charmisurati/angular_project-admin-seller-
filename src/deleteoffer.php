<?php

    header("Access-Control-Allow-Origin: *");
	$cn =new mysqli("localhost","root","","angular");
    
    $offer_id  = $_REQUEST["offer_id"];
     $query1 = "DELETE FROM tbloffer WHERE offer_id='$offer_id'"; 
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
