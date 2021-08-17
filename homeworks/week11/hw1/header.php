<?php 
  require_once('conn.php');
  require_once('utils.php');
?>
<header>
    <div>
      <div>
        <a href="./index.php">首頁</a>
        <?php if($role_row['role'] === 'admin'){
        ?>
          <a href="./admin.php">管理者後台</a>
        <?php } ?>
      </div>
      <div class="btn-wrap">
      <?php
        if($username){
          echo escape($username).' 你好，';
          echo '<a href="./logout.php" class="btn">登出</a>';
        }else{
          echo '<a href="./login.php" class="btn">登入</a> | <a href="./register.php" class="btn">註冊</a>';
        }
      ?>
    </div>
  </div>
</header>