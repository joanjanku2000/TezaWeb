<!DOCTYPE html>
<?php 
            $err = "";
            if (!isset($_POST['username']) || !isset($_POST['email']) 
                                            || !isset($_POST['password']) ){
                $err = "Ju nuk keni plotesuar te gjitha fushat!"
            } else {
                $err = "Everything ok";
            }
            if (preg_match("^\S+@\S+$",$_POST['email'])!=1){
                $err = "EMAILIN TE LUTEM";
            }
        ?>
<html>

    <head>
        <title>Ushtrimi 3</title>

    </head>
    <body>
        <form method="POST" action="ushtrimi3.php">
            <input type="text" name="username" placeholder="perdorues">
            <br>
            <input type="text" name="email" placeholder="email" autocomplete="off"> 
            <br>
            <input type="password" name="password" placeholder="password">
            <br>
            <input type="submit" value="submit">
        </form>
        <?php 
            echo "
                <p> ".$err.
                "</p";
                ?>
    </body>
</html>