<?php

include "../config.php";

$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$quantity = $data->quantity;

$query = "UPDATE stock SET amount = ( amount + ".$quantity.") where name = '".$name."'";

$result = mysqli_query($conn,$query);

if($result){
    echo "Success";
}else{
    echo mysqli_error($result);
    
}

?>