<!DOCTYPE html>
<html>
    <head>
        <title>Cours PHP & MySQL</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="cours.css">
    </head>
    
    <body>
        <h1>Bases de données MySQL</h1>  
        <?php
        try {
            $user = 'root';
            $pass = '';
            $dbh = new PDO("mysql:host=localhost;dbname=cours_php", $user, $pass);
            $request = 'SELECT * FROM user';
            
            foreach($dbh->query($request) as $row) {
                afficherLigne($row);
            }

            $dbh = null;
        }   catch(PDOException $e){
              echo "Erreur : " . $e->getMessage();
              die();
        }

        function afficherLigne($row) {
            echo 'nom : ' . $row['nom'];
            echo '<br />';
            echo 'prenom : ' . $row['prenom'];
        }
        ?>
    </body>
</html>