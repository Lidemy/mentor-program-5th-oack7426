<?php
  //避免 XSS 攻擊
  function escape($str){
    return htmlspecialchars($str, ENT_QUOTES);
  }

  session_start();
  $username = NULL;
  if(!empty($_SESSION['username'])){
    $username = $_SESSION['username'];
  }
  // 撈取使用者身份
  $identity_sql = "SELECT * FROM users WHERE username = ?";
  $identity_stmt = $conn -> prepare($identity_sql);
  $identity_stmt -> bind_param('s',$username);
  $identity_result = $identity_stmt ->execute();
  $identity_result = $identity_stmt -> get_result(); 
  $identity_row = $identity_result->fetch_assoc();

?>