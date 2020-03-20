<?php

    header("Access-Control-Allow-Origin: *");
	$cn =new mysqli("localhost","root","","angular");
	
	
    $email = $_REQUEST["email"];
    $password  = $_REQUEST["password"];
     $query1 = "SELECT  * FROM tblsignup WHERE email = '$email' AND password = '$password'" ;
    
    $rows1 = $cn->query($query1);
    $row = $rows1->fetch_object();
    $arr=array();
    if(empty($row))
    {
        
        echo  json_encode($arr);
    }
    
    
    else{
        
        
        $arr[]=$row;
        echo json_encode($arr);

        
    }

    
   

?>
