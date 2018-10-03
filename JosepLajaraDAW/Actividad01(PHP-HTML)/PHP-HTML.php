<?php
/**
 * Created by PhpStorm.
 * User: josep
 * Date: 23/09/2018
 * Time: 21:30
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Actividad01</title>
</head>
<body>
<?php
for ($i=0;$i<=250;$i++){
    $valor=$i;
    echo '<div style="background-color: rgb(0, '.$valor.' , 0)">RGB(0, '.$i.',0)</div>';
}
?>
</body>
</html>