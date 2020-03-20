<?php

header("Access-Control-Allow-Origin: *");
    
	$cn =new mysqli("localhost","root","","angular");
    
	$company_id = $_REQUEST["company_id"];
   
    
  // $query1 = "SELECT tbladdproduct.product_id,product_name,product_image,per_of_discount,tbladdproduct.offer_id,total_price,total_quantity,valid_offer,
	//		tbladdproduct.company_id,discount_amount,status,tbloffer.offer_name FROM tbloffer,tbladdproduct
		//	WHERE tbladdproduct.offer_id=tbloffer.offer_id and tbladdproduct.company_id='$company_id' ";
		
		$query1= " SELECT product_id,product_name,product_image,price_before_discount,discount_amount,price_after_discount,total_quantity,valid_offer, o.offer_id,o.offer_name ,o.company_id
		from tbladdproduct as p join  tbloffer as o on p.offer_id=o.offer_id  AND p.company_id='$company_id'";
  
    $rows1 = $cn->query($query1);
	
    
    while ($row = $rows1->fetch_assoc()) {
        
        $pp[] = $row;
    }
    
    echo json_encode($pp);
?>


