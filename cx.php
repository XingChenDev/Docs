<?php 
   $name = $_GET['name']; 
   function open_file($key) { 
      $json_string = json_decode(file_get_contents($key),true);   
      return json_encode ($json_string,JSON_UNESCAPED_UNICODE);
   };
   if($name==""){
      echo open_file("./update/404.json"); 
   }else if(file_exists("./update/$name.json")){ 
      echo open_file("./update/$name.json"); 
   }else{
      $test = array("name"=>"错误","status"=>4000,"message"=>"查询不到该文件","version"=>"","fixvers"=>"","updatemes"=>"{}" );
      echo  json_encode($test,JSON_UNESCAPED_UNICODE);
   };
 ?>