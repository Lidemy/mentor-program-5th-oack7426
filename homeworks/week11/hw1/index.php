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
  <title>留言板</title>
</head>
<body>
  <main >
    <?php 
      require_once('header.php');
    ?>
    <h2>留言板</h2>
    <div class="board-wrap">
      <div class="board-input">
        <?php
          if($username && $role_row['role'] !== 'banned'){
          ?>
            <form method="POST" action="./handle_add_comment.php" >
              <label>
                <h4>留言內容</h4>
                <textarea name="content"></textarea>
              </label>
              <input type="submit" value="送出">
            </form>
          <?php }?>
      </div>
      <div class="board-content">
        <?php
          $sql = "SELECT * FROM comments ORDER BY created_at DESC"; // 按照時間排序 （最新最上面）
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
                    <p class="time"><?php echo escape($row['created_at']);?></p>
                  </div>
                </div>
                <!-- utils.php 內的 fn -->
                <p class="txt"><?php echo escape($row['content']);?></p>
              </div>
              <?php if($username == $row['nickname']){
              ?>
                <div class="btn-wrap">
                  <a href="./update.php?id=<?php echo $row['id'] ?>" class="btn edit">編輯</a>
                  <a href="./delete.php?id=<?php echo $row['id'] ?>" class="btn">刪除</a>
                </div>
                 <?php }?>
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