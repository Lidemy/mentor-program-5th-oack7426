<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/all.css">
  <title>文章列表</title>
</head>
<body>
 <?php require_once('header.php'); ?>
  <main>
    <h2>文章列表</h2>
    <div class="card-wrap">
      <?php
      $sql = "SELECT * FROM articles ORDER BY created_at DESC";
      $stmt = $conn -> prepare($sql);
      $result = $stmt ->execute();
      $result = $stmt -> get_result(); 
      while ($row = $result->fetch_assoc()) {
        ?>
        <div class="card">
          <div class="card-box">
            <h3 class="hidden"><?php echo $row['title']?></h3>
            <p class="text hidden"><?php echo $row['content']?></p>
            <a href="./article.php?id=<?php echo $row['id']?>">點我看文章</a>
            <p class="time"><?php echo $row['created_at']?></p>
            </div>
        </div>
        <?php } ?>
    </div>
  </main>
</body>
</html>