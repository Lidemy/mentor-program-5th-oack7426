<?php 
  require_once('conn.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/all.css">
  <title>留言板 ｜ 登入會員</title>
</head>
<body>
  <main>
    <h2>留言板 ｜ 登入會員</h2>
    <div class="board-wrap">
      <form method="POST" action="./handle_login.php" class="user-from">
        <label>
          <h4>使用者帳號</h4>
          <input type="text" name="username">
        </label>
        <label>
          <h4>使用者密碼</h4>
          <input type="password" name="password">
        </label>
        <input type="submit" value="送出" >
      </form>
      <div class="btn-wrap bottom-btn">
        <a href="./index.php" class="btn">回到留言板</a>
        |
        <a href="./register.php" class="btn">註冊會員</a>
    </div>
    </div>
  </main>
  <script>
  <?php
   if(!empty($_GET['error'])){
      $msg = '有欄位為空值，請重新提交';
      echo 'alert("' . $msg . '")';
    }
    if(!empty($_GET['errornum_rows'])){
      $msg = '帳號或密碼有誤';
      echo 'alert("' . $msg . '")';
    }
  ?>
  </script>
</body>
</html>