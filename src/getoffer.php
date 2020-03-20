<?php

header("Access-Control-Allow-Origin: *");
    
	$cn =new mysqli("localhost","root","","angular");
    
	$company_id=$_REQUEST["company_id"];
	
    $query1 = "select offer_name,offer_id,company_id from tbloffer where company_id='$company_id' ";
    
    $rows1 = $cn->query($query1);
    
    while ($row = $rows1->fetch_assoc()) {
        
        $p[] = $row;
    }
    
    echo json_encode($p);
?>
