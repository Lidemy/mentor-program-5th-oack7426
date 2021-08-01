<?php
  require_once('conn.php');
  $id = $_POST['id'];
  $title = $_POST['title'];
  $content = $_POST['content'];

  if(empty($title) || empty($content)){
    header('Location: ./update.php?error=ture'); 
    die('有欄位為空值，請重新提交');
  }
  $sql = "UPDATE oack7426_articles SET title= ? ,content = ? where id = ?";
  $stmt = $conn -> prepare($sql);
  $stmt -> bind_param('sss',$title,$content,$id);
  $result = $stmt ->execute();
    

  if($result){
    header("Location: ./admin.php"); 
  }
?>