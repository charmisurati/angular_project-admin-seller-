<?php
	header("Access-Control-Allow-Origin: *");
	$cn =new mysqli("localhost","root","","angular");
	
	$username = $_POST["username"];
	$email= $_POST["email"];
	$password = $_POST["password"];
	$mobile = $_POST["mobile"];
	$address = $_POST["address"];
	
 
	
	$query = "insert into tblsignup(username,email,password,mobile,address)values('$username','$email','$password','$mobile','$address')";
	if($cn->query($query))
	{
		$pp[] = array("status" =>"success");
	}
	else
	{
		$pp[]= array("status"=>"fail");
	}
	echo json_encode($pp);
?>
