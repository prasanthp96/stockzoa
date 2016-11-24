<?php

    include("../config.php");
    
    $data = json_decode(file_get_contents("php://input"));

    $name = $data->update_name;

    $quantity = $data->update_quantity;

    $id = $data->update_id;

    $status = $data->update_status;

    echo $id;
    
    $stock = "UPDATE stock SET amount = amount - ".$quantity." where name = '".$name."'";

    $ans  = mysqli_query($conn,$stock);

    
    if($ans){
    
            $query = "UPDATE request SET request_status = '".$status."' where request_id =  ".$id."";

            $result = mysqli_query($conn,$query);

            if($result) {
                echo "succesfully updated";
            }
            else {
                echo mysqli_error($result);
            }

        
    } else {
      
        echo mysqli_error($ans);
        
    }

    

?>