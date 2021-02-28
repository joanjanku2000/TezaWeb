<!DOCTYPE html>
<?PHP
    $dice = rand(1,6);
    //echo $dice;
    session_start();
    if (!isset($_SESSION['dice'])){
        $_SESSION['dice'] = $dice;
    } 
    if (!isset($_SESSION['attempts'])){
        $_SESSION['attempts'] = 0;
    } 
    // echo $_SESSION[
    //     'dice'
    // ];
    if ($_SERVER['REQUEST_METHOD']=="POST"){
        if ($_SESSION['dice']==intval($_POST['user'])){
            $zari =  $_SESSION['dice'];
            $attps = $_SESSION['attempts'];
            session_destroy();
        }else{
            $_SESSION['attempts']++;
        }
    }
    
?>

<html>
    <head>

    </head>
    <body>
        <form method="POST" action="zar.php">
            <input type="number" name="user">
            <input type="submit" value="Submit">
        </form>
        <img src="img/<?php echo $zari ?>.jpg" >
        <p>Jane bere <?php if (isset($attps)) echo $attps ?> perpjekje</p>
    </body>
</html>