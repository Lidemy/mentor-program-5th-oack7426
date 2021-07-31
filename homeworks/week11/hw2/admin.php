<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/all.css">
  <title>Blog 部落格｜後台</title>
</head>
<body>
  <?php require_once('header.php'); ?>
  <main >
    <h2> Blog 部落格｜後台</h2>
    <div class="back-box">
      <a class="back-btn" href="./add.php">新增文章</a>
    </div>
    <div class="card-wrap">
      <?php
      $sql = "SELECT * FROM oack7426_articles ORDER BY created_at DESC"; // 按照時間排序 （最新最上面）
      $result = $conn->query($sql);
      while ($row = $result->fetch_assoc()) {
        echo '<div class="card">';
          echo '<div class="card-box">';
            echo '<h3>'.$row['title'].'</h3>';
            echo '<p class="text">'.$row['content'].'</p>';
            echo '<p class="time">'.$row['created_at'].'</p>';
            echo '</div>';
            echo '<div class="btn-wrap">';
              echo '<a href="./update.php?id='.$row['id'].'">編輯</a>';
              echo '<a href="./delete.php?id='.$row['id'].'">刪除</a>';
            echo '</div>';
        echo '</div>';
      }
      ?>
    </div>
  </main>
</body>
</html>