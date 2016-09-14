<?php

    include("../config.php");

    if($_GET["statusValue"] == "all")

    {
        $query = "SELECT * from request where request_status != 'new'";
        
        
    } else {
        
        $status = $_GET["statusValue"];  

        $query = "SELECT * from request where request_status = '".$status."'";

        
    }
    
    
    $result = mysqli_query($conn, $query);

    $data = array();

    while($row = mysqli_fetch_array($result)) {

        $data[] = $row;
    }

        print json_encode($data);

?>