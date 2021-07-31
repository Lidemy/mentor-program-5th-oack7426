<?php 
  require_once('conn.php');
  require_once('utils.php');
?>
<header>
  <ul>
    <li ><a class="logo" href="./index.php">Who's Blog</a></li>
    <li><a href="./article_list.php">文章列表</a></li>
    <li><a href="./about.php">關於我</a></li>
  </ul>
  <ul class="mr-left">
    <?php
      if($username){
      ?>
         <p><?php echo $username ?> 管理者，</p><a href="./logout.php" class="btn">登出</a></li>
         <?php }else{ ?>
          <li ><a href="./login.php" class="btn">登入</a> 
     <?php } ?>
     <?php if($username){
      ?>
      <li ><a href="./admin.php">後台</a></li>
    <?php } ?>
  </ul>
</header>