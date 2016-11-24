<?php

include("../config.php");

$data = json_decode(file_get_contents("php://input"));

$requested_by = $data->username;
$device_name = $data->devicename;
$quantity = $data->quantity;
$description = $data->description;
$request_status = "new";

$query = "INSERT INTO request (requested_by, device_name, quantity, description, request_status) VALUES('".$requested_by."','".$device_name."','".$quantity."','".$description."','".$request_status."')";

if(mysqli_query($conn,$query)){
    echo "success";
}
else {
    echo mysqli_error($conn);
}

?>