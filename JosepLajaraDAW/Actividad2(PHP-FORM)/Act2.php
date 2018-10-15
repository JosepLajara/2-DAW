<?php
/**
 * Created by PhpStorm.
 * User: 2daw
 * Date: 28/09/2018
 * Time: 9:10
 */
    $col1=$_POST['color1'];
    $col2=$_POST['color2'];
    $col3=$_POST['color3'];
/**
 * funcion que valida si los valoren introducidos son correctos
 * @param $num1
 * @param $num2
 * @param $num3
 */
    function validar1($num1,$num2,$num3){
        if($num1<0 || $num2<0 || $num3<0){
            echo "El numero tiene que ser mayor que 0<br>";
            return false;
        }elseif($num1>255 || $num2>255 || $num3>255){
            echo "El numero tiene que ser menor que 255<br>";
            return false;
        }else{
            return true;
        }
    }
    $color = sprintf("#%02x%02x%02x",$col1 ,$col2 ,$col3);

    $correct = validar1($col1,$col2,$col3);

    if ($correct==true) {
        echo "<div style=' height:100px; background-color:rgb($col1,$col2,$col3)'></div>";
    }
    echo $color;
?>

