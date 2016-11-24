<?php


    include("../config.php");

    $user = $_GET["current_user"];

    $query = "SELECT * from request where requested_by = '".$user."'";
    
    $result = mysqli_query($conn, $query);

    $data = array();

     while($row = mysqli_fetch_array($result)) {

        $data[] = $row;
    
     }

        print json_encode($data);

?>