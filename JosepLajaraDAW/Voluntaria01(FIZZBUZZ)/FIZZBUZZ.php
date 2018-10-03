<?php
/**
 * Created by PhpStorm.
 * User: josep
 * Date: 23/09/2018
 * Time: 20:45
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>FIZZBUZZ</title>
</head>
<body>

<?php

    for($i=0; $i<=100; $i++){

        if($i % 3 == 0 && $i % 5 == 0){
            echo  "FizzBuzz";
        }
        else if($i % 5 == 0){
            echo "Buzz ";
        }
        else if($i % 3 == 0){
            echo "Fizz ";
        }
        else{
            echo $i;
        }
        echo "<br>";
    }

?>



</body>
</html>