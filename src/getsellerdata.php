<?php

header("Access-Control-Allow-Origin: *");
    
	$cn =new mysqli("localhost","root","","angular");
    
	
   
    
    $query1 = "select * from tblsignup ";
    
    $rows1 = $cn->query($query1);
    
    while ($row = $rows1->fetch_assoc()) {
        
        $pp[] = $row;
    }
    
    echo json_encode($pp);
?>
