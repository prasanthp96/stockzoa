<?php

    include("../config.php");
    
    $data = json_decode(file_get_contents("php://input"));

    $id = $data->update_id;

    $status = $data->update_status;

    echo $id;

    $query = "UPDATE request SET request_status = '".$status."' where request_id =  ".$id."";

    $result = mysqli_query($conn,$query);

    if($result) {
        echo "succesfully updated";
    }
    else {
        echo mysqli_error($result);
    }


?>