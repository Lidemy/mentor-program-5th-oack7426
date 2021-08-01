<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/all.css">
  <title>新增文章</title>
</head>
<body>
  <?php require_once('header.php'); ?>
  <main >
    <h2> 新增文章</h2>
    <form method="POST" action="./handle_add.php">
      <label>
        <h3>標題</h3>
        <input type="text" name="title">
      </label>
      <label>
        <h3>內容</h3>
        <textarea name="content"></textarea>
      </label>
      <input type="submit" value="送出">
    </form>
  </main>
  <script>
    <?php
      if(!empty($_GET['error'])){
        $msg = '有欄位為空值，請重新提交';
        echo 'alert("' . $msg . '")';
      }
      ?>
  </script>
</body>
</html>