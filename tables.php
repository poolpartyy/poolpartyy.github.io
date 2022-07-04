<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="tables.css">
</head>
<body>

<header>
    <h1>Pool Party's List</h1>
</header>

<div id="retour"><button><a href="form.html">Retour</a></button></div>

<div id="nav">
<nav>
    <li><button><a href="index.html">Acceuil</a></button></li>
    <li><button><a href="form.html">Publier sa pool party</a></button></li>
</nav>
</div>


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
    
    try {
        $user = 'root';
        $pass = '';
        $conn = new PDO("mysql:host=localhost;dbname=$dbname", $user, $pass);
        $request = 'SELECT * FROM tables';
        
        foreach($conn->query($request) as $row) {
            afficherLigne($row);
        }
    
        $dbh = null;
    }   catch(PDOException $e){
          echo "Erreur : " . $e->getMessage();
          die();
    }
    
    function afficherLigne($row) {
        echo '<table>
                <tr>
                    <th>Date</th>
                    <th>Heure de début</th>
                    <th>Heure de fin</th>
                    <th>Adresse</th>
                    <th>Capacité</th>
                    <th>Téléphone</th>
                </tr>
                <tr>
                    <td>'.$row['date'].'</td>
                    <td>'.$row['heure1'].'</td>
                    <td>'.$row['heure2'].'</td>
                    <td>'.$row['adresse'].'</td>
                    <td>'.$row['capacite'].'</td>
                    <td>'.$row['phone'].'</td>
                </tr>
            </table>';
    }
?>
</body>
</html>