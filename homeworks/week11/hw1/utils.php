<?php
  function escape($str){
    return htmlspecialchars($str, ENT_QUOTES);
  }

  session_start();
  $username = NULL;
  if(!empty($_SESSION['username'])){
    $username = $_SESSION['username'];
  }
  // 撈取使用者身份
  $role_sql = "SELECT * FROM users WHERE username = ?";
  $role_stmt = $conn -> prepare($role_sql);
  $role_stmt -> bind_param('s',$username);
  $role_result = $role_stmt ->execute();
  $role_result = $role_stmt -> get_result(); 
  $role_row = $role_result->fetch_assoc();
?>