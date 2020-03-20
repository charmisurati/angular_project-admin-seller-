<?php
	header("Access-Control-Allow-Origin: *");
	$cn =new mysqli("localhost","root","","angular");
	
	
	
	//$status=$_POST["status"];

	
	$query1 = "SELECT username,id from tblsignup where status='1' ";
	$rows1 = $cn->query($query1);

$arr=array();

    while($row = $rows1->fetch_assoc()){
        $pp[]=$row;
    }
   
    echo json_encode($pp);

?>
