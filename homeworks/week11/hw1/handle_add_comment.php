<?php
  require_once('conn.php');
  require_once('utils.php');

  $user_sql = "select * from users where username = ?";
  $user_stmt = $conn -> prepare($user_sql);
  $user_stmt -> bind_param('s',$username);
  $user_result = $user_stmt  ->execute();
  $user_result  = $user_stmt  -> get_result(); 
  $user_row = $user_result->fetch_assoc();
  $nickname = $user_row['nickname'];
  $content = $_POST['content'];

  if(empty($content)){ 
    header('Location: ./index.php?error=ture');
    die('有欄位為空值，請重新提交');
  }

  $sql = "INSERT INTO comments(nickname,username, content) VALUES (?,?,?)";
  $stmt = $conn -> prepare($sql);
  $stmt -> bind_param('sss',$nickname,$username,$content);
  $result = $stmt ->execute();

  if($result){
    header('Location: ./index.php');
  }else{
    echo "錯誤原因：". $conn -> error;
  }
?>