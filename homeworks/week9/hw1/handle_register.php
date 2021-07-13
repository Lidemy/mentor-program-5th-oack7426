<?php
  require_once('conn.php');

  $nickname = $_POST['nickname'];
  $username = $_POST['username'];
  $password = $_POST['password'];

  //判斷是否空值
  if(empty($nickname) || empty($username) || empty($password)){ 
    header('Location: ./register.php?error=ture');
    die('有欄位為空值，請重新提交');
  }
  $sql = "INSERT INTO oack7426_users(nickname, username,password ) VALUES ('$nickname','$username','$password')";
  $result = $conn ->query($sql);

  if($result){
    header('Location: ./index.php');
  }else{
    // username 重複
    if(strpos($conn -> error,"Duplicate entry") !== false){
      header('Location: ./register.php?errorUsername=ture');
    }
    echo "錯誤原因：". $conn -> error;
  }
?>