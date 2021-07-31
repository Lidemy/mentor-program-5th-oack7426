<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/all.css">
  <title>Who's Blog</title>
</head>
<body>
 <?php require_once('header.php'); ?>
  <main>
    <h2>Who's Blog</h2>
    <div class="back-box">
      <p>只顯示最新五筆文章</p>
    </div>
    <div class="card-wrap">
      <?php
      $sql = "SELECT * FROM oack7426_articles ORDER BY created_at DESC LIMIT 5";
      $stmt = $conn -> prepare($sql);
      $result = $stmt ->execute();
      $result = $stmt -> get_result(); 
      while ($row = $result->fetch_assoc()) {
        ?>
        <div class="card">
          <div class="card-box">
            <h3 class="hidden"><?php echo escape($row['title']) ?></h3>
            <p class="text hidden"><?php echo escape($row['content']) ?></p>
            <a href="./article.php?id=<?php echo escape($row['id']) ?>">點我看文章</a>
            <p class="time"><?php echo escape($row['created_at']) ?></p>
            </div>
        </div>
        <?php } ?>
    </div>
  </main>
</body>
</html>