<?php

header("Access-Control-Allow-Origin: *");
    
	$cn =new mysqli("localhost","root","","angular");
    
	$offer_id = $_REQUEST["offer_id"];
	
    $query1 = "select * from tbloffer where offer_id= '$offer_id'";
    
    $rows1 = $cn->query($query1);
    
    while ($row = $rows1->fetch_assoc()) {
        
        $pp[] = $row;
    }
    
    echo json_encode($pp);
?>
