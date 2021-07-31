<?php
  require_once('conn.php');

  $content = $_POST['content'];
  $id = $_POST['id'];
  if(empty($content)){
    die('有欄位為空值，請重新提交');
  }
  $sql = "UPDATE comments SET content = ? WHERE id = ?";
  $stmt = $conn -> prepare($sql);
  $stmt -> bind_param('ss',$content,$id);
  $result = $stmt -> execute();
  
  if($result){
    header('Location: ./index.php');
  }else{
    echo "錯誤原因：". $conn -> error;
  }
?>