<?php
  session_start();

  require_once('conn.php');
  require_once('utils.php');

  $username = $_POST['username'];
  $password = $_POST['password'];

  //判斷是否空值
  if(empty($username) || empty($password)){ 
    header('Location: ./login.php?error=ture');
    die('有欄位為空值，請重新提交');
  }
  $sql = "select * from oack7426_users where username =?";
  $stmt = $conn -> prepare($sql);
  $stmt -> bind_param('s',$username);
  $result = $stmt ->execute();
  $result = $conn ->query($sql); //呼叫確定是否執行成功
  $result = $stmt -> get_result(); //取資料

  if($result -> num_rows === 0){
    header('Location: ./login.php?errornum_rows=ture');
    exit();
  } 
  $row = $result -> fetch_assoc();
  if(password_verify($password,$row['password'])){ //判斷輸入的密碼跟hash過後的資料庫密碼是否一致
    $_SESSION['username'] = $username;
    header('Location: ./index.php');
  }else{
    header('Location: ./login.php?errornum_rows=ture');
    echo "錯誤原因：". $conn -> error;
  }
?>