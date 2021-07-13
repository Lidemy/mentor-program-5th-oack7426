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
  $sql = "select * from oack7426_users where username ='$username' and password ='$password'";
  $result = $conn ->query($sql);

  if($result -> num_rows){ //num_rows 符合的資料有幾筆
    /*
    1.產生 sesstion id (token)
    2.把 username 寫入檔案
    3. set-cookie : sesstion-id
    */
    $_SESSION['username'] = $username;
    header('Location: ./index.php');
  }else{
    header('Location: ./login.php?errornum_rows=ture');
    echo "錯誤原因：". $conn -> error;
  }
?>