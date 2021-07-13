<?php 
  session_start();
  require_once('conn.php');

 /*
    1.從 cookie 讀取 PHPSESSID(token)
    2.從檔案讀取 sesstion-id 
    3.放到 $_SESSION
  */
  $username = NULL;
  if(!empty($_SESSION['username'])){
    $username = $_SESSION['username'];
  }
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
    <div class="btn-wrap">
      <?php
        if($username){
          echo $username.' 你好，';
          echo '<a href="./logout.php" class="btn">登出</a>';
        }else{
          echo '<a href="./login.php" class="btn">登入</a> | <a href="./register.php" class="btn">註冊</a>';
        }
      ?>
    </div>
    <h2>留言板</h2>
    <div class="board-wrap">
      <div class="board-input">
        <?php
          if($username){
          ?>
            <form method="POST" action="./handle_add_comment.php" >
              <!-- <label>
                <h4>暱稱</h4>
                <input type="text" name="nickname">
              </label> -->
              <label>
                <h4>留言內容</h4>
                <textarea name="content"></textarea>
              </label>
              <input type="submit" value="送出">
            </form>
          <?php }?>
      </div>
      <div class="board-content">
        <!-- <div class="card">
          <div class="card-box">
            <div class="card-inbox">
              <img src="https://fakeimg.pl/250x100/ff0000/" alt="頭像">
              <div class="conent">
                <p class="name">1515151</p>
                <p class="time">2020-05-06 16:27</p>
              </div>
            </div>
            <p class="txt">48484884848</p>
          </div>
          <div class="btn-wrap">
            <a href="" class="btn edit">編輯</a>
            <a href="" class="btn">刪除</a>
          </div>
        </div> -->
        <?php
          $sql = "SELECT * FROM oack7426_comments ORDER BY created_at DESC"; // 按照時間排序 （最新最上面）
          $result = $conn->query($sql);
          while ($row = $result->fetch_assoc()) {
          ?>
            <div class="card">
              <div class="card-box">
                <div class="card-inbox">
                  <!-- <img src="https://fakeimg.pl/250x100/" alt="頭像"> -->
                  <div class="conent">
                    <p class="name"><?php echo $row['nickname'];?></p>
                    <p class="time"><?php echo $row['created_at'];?></p>
                  </div>
                </div>
                <p class="txt"><?php echo $row['content'];?></p>
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