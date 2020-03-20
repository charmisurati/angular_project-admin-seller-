<?php
	header("Access-Control-Allow-Origin: *");
	$cn =new mysqli("localhost","root","","angular");
	
	
	$id=$_POST["id"];
	//$status=$_POST["status"];

	
	$query1 = "UPDATE tblsignup SET status='0' where id='$id'";
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
