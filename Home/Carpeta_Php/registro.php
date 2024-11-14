<?php 

include("../../Datos/conexion.php");

$nombre = $_POST["nombre"];
$apellidos = $_POST["apellidos"];
$correo = $_POST["correo"];
$contraseña = $_POST["contraseña"];

if ($nombre && $apellidos && $correo && $contraseña) {
    
    $conn->begin_transaction();

        $stmt_registro = $conn->prepare("INSERT INTO usuarios (nombre, apellidos, correo, contraseña) VALUES (?, ?, ?, ?)");
        $stmt_registro->bind_param("ssss", $nombre, $apellidos, $correo, $contraseña);
        $stmt_registro->execute();

        $conn->commit();

        $stmt_registro->close();
        
        header("Location: ../Carpeta_html/Home1.html ");
        exit();
} else {
    echo "Por favor, complete todos los campos.";
}

$conn->close();
?>
