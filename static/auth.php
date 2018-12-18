<?php

echo "You are in";
$q = isset($_GET["id"]) ? intval($_GET["id"]) : '';

if (empty($q)) {
    echo 'empty word';
    exit;
} else{
    echo "You have entered: $q";
}
//include 'conndb.php';


?>
