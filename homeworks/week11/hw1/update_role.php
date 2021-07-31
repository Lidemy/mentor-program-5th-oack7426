<?php 
  require_once('conn.php');
  require_once('utils.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Com patible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/all.css">
  <title>留言板｜編輯身份類別</title>
</head>
<body>
  <?php 
    require_once('header.php');
  ?>
  <main >
    <h2>留言板｜編輯身份類別</h2>
    <?php 
      $username = $_GET['username'];
      $sql = "SELECT * FROM oack7426_users WHERE username = ?";
      $stmt = $conn -> prepare($sql);
      $stmt -> bind_param('s',$username);
      $result = $stmt -> execute();
      $result = $stmt -> get_result();
      $row = $result -> fetch_assoc();
    ?>
      <div class="board-wrap">
          <form method="POST" action="./handle_update_role.php" >
            <label>
              <h4>身份類別</h4>
              <input type="text" name="role" value="<?php echo $row['role'] ?>">
            </label>
            <input type="hidden" name="username" value="<?php echo $row['username'] ?>">
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