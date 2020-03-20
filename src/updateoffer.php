<?php

header("Access-Control-Allow-Origin: *");

	$cn =new mysqli("localhost","root","","angular");
	$offer_name = $_POST["offer_name"];
	$offer_id  = $_POST["offer_id"];
	
	if(!empty($_FILES['file'])){
    
   // echo $username = $_POST["username"];
    
    $ext = pathinfo($_FILES['file']['name'],PATHINFO_EXTENSION);
            $image = time().'.'.$ext;
            move_uploaded_file($_FILES["file"]["tmp_name"], 'images/'.$image);
    //echo $image." successfully uploaded";


}
else
{


 // echo "Invalid File or Empty File";
}

	
	
	$query = "update tbloffer set offer_name='$offer_name' ,offer_image = '$image' where offer_id = '$offer_id'";
	
	if($cn->query($query))
	{
		$pp[] = array("status" =>"success");
	}
	else
	{
		$pp[]= array("status"=>"fail");
	}
	echo json_encode($pp);
  
  /*   $qu = "select * from tblemp";
    
     $rows = $con->query($qu);

    while($row = $rows->fetch_assoc())
     {
        $pp[]  = $row;
        
     }
    
    echo json_encode($pp);
   */

?>

