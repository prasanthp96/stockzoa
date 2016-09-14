<?php

$server = "localhost";
$username = "root";
$password = "";
$db = "STOCK";

$conn = mysqli_connect($server,$username,$password,$db);
/*
if($conn){
    echo "connection success";
}

$username = 'admin';
$password = 'admin123';
$sql = "SELECT * FROM some WHERE username = '".$username."' AND password = '".$password."'";
 $result = mysqli_query($conn,$sql);

 $count = mysqli_num_rows($result);
 
 
 if($count){
 	echo "query success";
 }
 else{
  echo mysqli_error($conn);
  }*/
?>
