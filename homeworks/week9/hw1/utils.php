<?php
  // 亂數產生 16 碼英文
  function generateToken(){
    $s = '';
    for ($i=1;$i<16;$i++){
      $s .= chr(rand(65,90));
    }
    return $s;
  }
?>