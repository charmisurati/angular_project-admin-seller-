<?php

header("Access-Control-Allow-Origin: *");
    
	$cn =new mysqli("localhost","root","","angular");
    
	
	
    $query1 = "select * from tbladdproduct ";
    
    $rows1 = $cn->query($query1);
    
    while ($row = $rows1->fetch_assoc()) {
        
        $p[] = $row;
    }
    
    echo json_encode($p);
?>
