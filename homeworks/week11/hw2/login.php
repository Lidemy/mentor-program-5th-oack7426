<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/all.css">
  <title>登入</title>
</head>
<body>
  <?php require_once('header.php'); ?>
  <main >
    <h2>登入</h2>
    <form method="POST" action="./handle_login.php">
      <label>
        <h3>帳號</h3>
        <input type="text" name="username">
      </label>
      <label>
        <h3>密碼</h3>
        <input type="password" name="password">
      </label>
      <input type="submit" value="送出">
    </form>
  </main >
</body>
</html>