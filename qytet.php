<?php
    $qytete = "Tirane,Durres,Elbasan,Vlore,Shkoder,Korce";
    
    $qytetetArray = explode(',',$qytete);
    $pattern = "/e$/";
    $pattern = "/^e/i";
    $newArray = array();
    foreach ($qytetetArray as $city){
        if (preg_match($pattern,$city)){
            array_push($newArray,$city);
        }
    }
    var_dump($newArray);
?>