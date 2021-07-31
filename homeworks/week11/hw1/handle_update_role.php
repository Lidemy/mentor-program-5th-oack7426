<?php
  require_once('conn.php');

  $username = $_POST['username'];
  $role = $_POST['role'];
  if(empty($role)){
    die('有欄位為空值，請重新提交');
  }
  $sql = "UPDATE oack7426_users SET role = ? WHERE username = ?";
  $stmt = $conn -> prepare($sql);
  $stmt -> bind_param('ss',$role,$username);
  $result = $stmt -> execute();
  
  if($result){
    header('Location: ./admin.php');
  }else{
    echo "錯誤原因：". $conn -> error;
  }
?>