<?php 
 $name = $_GET['name']; 
 function open_file($key) { 
    $json_string = file_get_contents($key);  
    return $json_string;
  };
  if($name==""){
 echo open_file("./update/plugins/404.json"); 
  }else{ 
     echo open_file("./update/$name/update.json"); }
 ?>