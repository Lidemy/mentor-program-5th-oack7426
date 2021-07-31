<?php 
  require_once('conn.php');
  require_once('utils.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/all.css">
  <title>留言板｜編輯</title>
</head>
<body>
  <?php 
    require_once('header.php');
  ?>
  <main >
    <h2>留言板｜編輯</h2>
    <?php 
      $id = $_GET['id'];
      $sql = "SELECT * FROM oack7426_comments WHERE id = ?";
      $stmt = $conn -> prepare($sql);
      $stmt -> bind_param('s',$id);
      $result = $stmt -> execute();
      $result = $stmt -> get_result();
      $row = $result -> fetch_assoc();
    ?>
      <div class="board-wrap">
          <form method="POST" action="./handle_update.php" >
            <label>
              <h4>留言內容</h4>
              <textarea name="content"><?php echo $row['content'] ?></textarea>
            </label>
            <input type="hidden" name ="id" value="<?php echo $id ?>">
            <input type="submit" value="送出">
          </form>
      </div>
    <?php ?> 
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