<?php
    include("../config.php");

    $data = json_decode(file_get_contents("php://input"));

    $username = $data->username;
    $password = $data->password;

   //$username = 'admin';
   //$password = 'admin123';

   $query = "SELECT username FROM accounts where username = '".$username."' AND password = '".$password."'";
   // $query = "SELECT username FROM accounts where username = 'admin' AND password = 'admin123' ";

    $result = mysqli_query($conn,$query);

    $count = mysqli_num_rows($result);

    if($count != 0) {
            echo $username;
    }
    else {
        echo "notfound";
    }


?>