<?php
$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "carwebsite";  
$puerto = 3306;

$conn = new mysqli($servername, $username, $password, $dbname, $puerto);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
