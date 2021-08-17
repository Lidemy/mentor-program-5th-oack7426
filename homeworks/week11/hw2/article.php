<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/all.css">
  <title><?php echo escape($title) ?></title>
</head>
<body>
  <?php require_once('header.php'); ?>
  <?php 
  $id = $_GET['id'];
  $sql = "SELECT * FROM oack7426_articles WHERE id = ?";
  $stmt = $conn -> prepare($sql);
  $stmt -> bind_param('s',$id);
  $result = $stmt ->execute();
  $result = $stmt -> get_result(); 
  $row = $result -> fetch_assoc();
  $title = $row['title'];
  $content = $row['content'];
  ?>
  <main>
    <h2> <?php echo escape($title) ?></h2>
    <div class="card-wrap">
      <div class="card">
        <div class="card-box">
          <h4><?php echo escape($row['created_at'])?></h4><br>
          <p><?php echo escape($content) ?></p>
        </div>
      </div>
    </div>
  </main>
</body>
</html>