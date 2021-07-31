<?php
require_once('conn.php');

$id = $_GET['id'];
$sql = "DELETE FROM oack7426_articles WHERE id = ?";
$stmt = $conn -> prepare($sql);
$stmt -> bind_param('s',$id);
$result = $stmt ->execute();
    

if($result){
  header('Location: ./admin.php');
}else{
  echo "錯誤原因：". $conn -> error;
}

?>