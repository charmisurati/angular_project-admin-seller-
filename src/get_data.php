<?php

header("Access-Control-Allow-Origin: *");
    
	$cn =new mysqli("localhost","root","","angular");
    
	$company_id = $_REQUEST["company_id"];
   
    
    $query1 = "select * from tbloffer where company_id= '$company_id'";
    
    $rows1 = $cn->query($query1);
    
    while ($row = $rows1->fetch_assoc()) {
        
        $pp[] = $row;
    }
    
    echo json_encode($pp);
?>
