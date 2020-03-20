<?php

header("Access-Control-Allow-Origin: *");

	$cn =new mysqli("localhost","root","","angular");
	$company_id  = $_POST["company_id"];
	$offer_name = $_POST["offer_name"];
	//$offer_id= $_POST["offer_id"];
	//$offer_image= $_POST["offer_image"];
	
	
	
	
	if(!empty($_FILES['file'])){
    
   // echo $username = $_POST["username"];
    
   $ext = pathinfo($_FILES['file']['name'],PATHINFO_EXTENSION);
            $image = time().'.'.$ext;
            move_uploaded_file($_FILES["file"]["tmp_name"], 'images/'.$image);
		//	$offer_image = 'images/' + $image;
    //echo $image." successfully uploaded";
}
else
{
 // echo "Invalid File or Empty File";
}	
	$query = "insert into tbloffer(offer_name,offer_image,company_id)values('$offer_name','$image','$company_id')";
	
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

