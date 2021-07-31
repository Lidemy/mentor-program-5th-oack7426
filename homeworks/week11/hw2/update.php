<?php 
    require_once('conn.php');

    $id = $_GET['id'];
    $sql = "SELECT * FROM articles WHERE id = ?";
    $stmt = $conn -> prepare($sql);
    $stmt -> bind_param('s',$id);
    $result = $stmt -> execute();
    $result = $stmt -> get_result();
    $row = $result -> fetch_assoc();

  ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/all.css">
  <title>編輯文章</title>
</head>
<body>
  <?php require_once('header.php'); ?>
  <main >
    <h2> 編輯文章</h2>
    <form method="POST" action="./handle_update.php">
      <input type="hidden" name="id" value="<?php echo $row['id'];?>">
      <label>
        <h3>標題</h3>
        <input type="text" name="title" value="<?php echo $row['title'];?>">
      </label>
      <label>
        <h3>內容</h3>
        <textarea name="content"><?php echo $row['content'];?></textarea>
      </label>
      <input type="submit" value="送出">
    </form>
  </main>
</body>
</html>