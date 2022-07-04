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

// if ($number = 2) {
//         echo '<table>
//             <tr>
//                 <th>Date</th>
//                 <th>Heure de début</th>
//                 <th>Heure de fin</th>
//                 <th>Adresse</th>
//                 <th>Capacité</th>
//                 <th>Téléphone</th>
//             </tr>
//             <tr>
//                 <td>$date</td>
//                 <td>$heure1</td>
//                 <td>$heure2</td>
//                 <td>$adresse</td>
//                 <td>$capacite</td>
//                 <td>$phone</td>
//             </tr>
//         </table>';
// }


?>