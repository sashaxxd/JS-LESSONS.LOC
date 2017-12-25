<?php
  require_once 'massiv.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
</body>
   <?php  foreach ($lore as $key => $item): ?>
  <div class="text" style="background-color: antiquewhite; font-family: 'Roboto Light'; border: 1px solid rebeccapurple;"><?= $item ?>
      <br>

      <input type="checkbox" class="check" name="check1" onchange="showCheck()">
      <div id="div<?=$key?>" style="display: none" ><a href="http://google.ru">google</a></div>
  </div><br>
   <?php endforeach; ?>

</html>
</body>
<script src="script.js"></script>
</html>