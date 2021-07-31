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
  <title>留言板｜管理者後台</title>
</head>
<body>
  <?php 
    require_once('header.php');
  ?>
  <main >
    <h2>留言板｜管理者後台</h2>
    <div class="board-wrap">
      <div class="board-content">
        <?php
          $sql = "SELECT comments.nickname,comments.content,comments.created_at, users.role FROM comments INNER JOIN users ON comments.username = users.username ORDER BY created_at DESC";
          $stmt = $conn -> prepare($sql);
          $result = $stmt ->execute();
          $result = $stmt -> get_result(); 
          while ($row = $result->fetch_assoc()) {
          ?>
            <div class="card">
              <div class="card-box">
                <div class="card-inbox">
                  <div class="conent">
                    <p class="name"><?php echo escape($row['nickname']);?></p>
                    <p class="id">身份類別：<?php echo escape($row['role']);?> ｜
                     <a href="./update_role.php?username=<?php echo $row['username'] ?>">修改</a>
                   </p>
                    <p class="time"><?php echo escape($row['created_at']);?></p>
                  </div>
                </div>
                <p class="txt"><?php echo escape($row['content']);?></p>
              </div>
              <div class="btn-wrap">
                <a href="./update.php?id=<?php echo $row['id'] ?>" class="btn edit">編輯</a>
                <a href="./delete.php?id=<?php echo $row['id'] ?>" class="btn">刪除</a>
              </div>
            </div>
          <?php }?>
      </div>

    </div>
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