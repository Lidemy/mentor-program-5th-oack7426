<?php
  session_start();
  require_once('conn.php');

  // $username = NULL;
  // if(!empty($_COOKIE['token'])){
  //   $token = $_COOKIE['token'];
  //   $token_sql = "select * from tokens where token ='$token'";
  //   $token_result = $conn ->query($token_sql);
  //   $token_row = $token_result->fetch_assoc();
  //   $username = $token_row['username'];
  // }
  $username = NULL;
  if(!empty($_SESSION['username'])){
    $username = $_SESSION['username'];
  }

  $user_sql = "select * from oack7426_users where username ='$username'";
  $user_result = $conn ->query($user_sql);
  $user_row = $user_result->fetch_assoc();


  $nickname = $user_row['nickname'];
  $content = $_POST['content'];

  //判斷是否空值
  if(empty($content)){ 
    header('Location: ./index.php?error=ture');
    die('有欄位為空值，請重新提交');
  }
  $sql = "INSERT INTO oack7426_comments(nickname, content) VALUES ('$nickname','$content')";
  $result = $conn ->query($sql);

  if($result){
    header('Location: ./index.php');
  }else{
    echo "錯誤原因：". $conn -> error;
  }
?>