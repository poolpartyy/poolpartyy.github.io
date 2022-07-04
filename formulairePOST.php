<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php

$servname = 'localhost';
$dbname = 'poolparty';
$user = 'root';
$pass = '';
    
$date = "";
$adresse = "";
$capacite = "";
$phone = "";
$heure1 = "";
$heure2 = "";
$number = 0;

if(isset($_POST['button'])) {
    try{
        $conn = new PDO("mysql:host=$servname;dbname=$dbname", $user, $pass);
        $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        $number = 1;
        }
    
        catch(PDOException $e){
            echo "Erreur : " . $e->getMessage();
        }
}

if ($number === 1) {
    $date = $_POST["jour"];
    $adresse = $_POST["adresse"];
    $capacite = $_POST["capacite"];
    $phone = $_POST["phone"];
    $heure1 = $_POST["heure1"];
    $heure2 = $_POST["heure2"];

    $sql = "INSERT INTO tables(date, heure1, heure2, adresse, capacite, phone)VALUES('.$date', '.$heure1', '.$heure2', '.$adresse', '.$capacite', '.$phone')";

    $conn->exec($sql);
    $number = 2;
}

?>


<script>
    window.location.replace("http://coursphp/tables.php");
</script>
</body>
</html>






