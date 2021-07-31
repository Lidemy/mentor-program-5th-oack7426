<?php
  session_start();
  require_once('conn.php');

  $nickname = $_POST['nickname'];
  $username = $_POST['username'];
  $password = password_hash($_POST['password'],PASSWORD_DEFAULT);

  //判斷是否空值
  if(empty($nickname) || empty($username) || empty($password)){ 
    header('Location: ./register.php?error=ture');
    die('有欄位為空值，請重新提交');
  }
  $sql = "INSERT INTO users(nickname, username,password ) VALUES (?,?,?)";
  $stmt = $conn -> prepare($sql);
  $stmt -> bind_param('sss',$nickname,$username,$password);
  $result = $stmt ->execute();

  if($result){
    $_SESSION['username'] = $username;
    header('Location: ./index.php');
  }else{
    // username 重複
    if(strpos($conn -> error,"Duplicate entry") !== false){
      header('Location: ./register.php?errorUsername=ture');
    }
    echo "錯誤原因：". $conn -> error;
  }
?>