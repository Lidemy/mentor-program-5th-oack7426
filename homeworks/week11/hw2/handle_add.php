<?php
  require_once('conn.php');

  $title = $_POST['title'];
  $content = $_POST['content'];

  //判斷是否空值
  if(empty($title) || empty($content)){ 
    die('有欄位為空值，請重新提交');
  }
  $sql = "INSERT INTO oack7426_articles(title, content) VALUES ('$title','$content')";
  $result = $conn ->query($sql);

  if($result){
    header('Location: ./admin.php');
  }else{
    echo "錯誤原因：". $conn -> error;
  }
?>