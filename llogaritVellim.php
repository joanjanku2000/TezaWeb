<!DOCTYPE html>
<?php
    $KOEFICIENTI = 4/3;
    if ($_SERVER['REQUEST_METHOD']=="GET"){
        if (isset($_GET['submit'])){
            if (isset($_GET['radius'])){
                $radius = $_GET['radius'];
                $volume = M_PI*pow($radius,3)*$KOEFICIENTI;
               
            }
        }
    }
    $myfile = fopen("llogaritVellim.txt", "a") or die("Unable to open gil");
    fwrite($myfile,"Rrezja ".$radius." Vellimi ".$volume."\n");

//   $con =  mysqli_connect($host,$user,$password,$DB) or die(fniernfna);
     $sql = "INSERT INTO RRETHI (rreze,vellim) values (".$radius.",".$volume.")";
     $con -> query($sql);
?>
<html>
    <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
       <div class="container">
       <form method="GET" action="llogaritVellim.php" class='form'>
        <label> Rrezja:
        <input type="number" name="radius" min="0" class="form-control">
        </label>   
        <br>
        <label> Vellimi:
        <input type="text" readonly class="form-control" value=<?php echo $volume?>>
        </label> 
        <br>
        <input type="submit" class="btn btn-primary" name="submit" value="Llogarit">
        </form>
       </div>
    </body>
</html>