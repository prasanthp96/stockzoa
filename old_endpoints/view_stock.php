<?php

include("../config.php");

$query = "SELECT * from stock";

$data = array();



$result = mysqli_query($conn,$query );

while($row = mysqli_fetch_array($result)) {

        $data[] = $row;
    
}

print json_encode($data);

?>