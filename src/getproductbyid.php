<?php

header("Access-Control-Allow-Origin: *");
    
	$cn =new mysqli("localhost","root","","angular");
    
	$product_id = $_REQUEST["product_id"];
	
    $query1 = "select * from tbladdproduct where product_id= '$product_id'";
    
    $rows1 = $cn->query($query1);
    
    while ($row = $rows1->fetch_assoc()) {
        
        $p[] = $row;
    }
    
    echo json_encode($p);
?>
