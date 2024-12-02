<?php 
/* declaramos las variables con el metodo post*/
include("../../Datos/conexion.php");
$añoA = $_POST['añoA'];
$kilometraje = $_POST['kilometraje'];
$marca = $_POST['marca'];
$modelo = $_POST['modelo'];
$version = $_POST['version'];
$color = $_POST['color'];
$combustible = $_POST['combustible'];
$precio = $_POST['Precio'];
$departamento = $_POST['departamento'];
$provincia = $_POST['provincia'];
$numt = $_POST['numt'];
/* gestion del archivo*/ 
if (isset($_FILES['fotos']) && $_FILES['fotos']['error'] == 0) {
    $nombreArchivo = $_FILES['fotos']['name'];
    $tempArchivo = $_FILES['fotos']['tmp_name'];
/* enruta imagen*/ 
    $carpetaDestino = 'fotos_vehiculos/';
    if (!file_exists($carpetaDestino)) {
        mkdir($carpetaDestino, 0777, true);
    }

    $rutaDestino = $carpetaDestino . basename($nombreArchivo);
/* */ 
    if (move_uploaded_file($tempArchivo, $rutaDestino)) {
        // Insertar datos en la base de datos
        $sql = "INSERT INTO vehiculos (Año, kilometraje, marca, modelo, version, color, combustible, precio, departamento, provincia, numt, foto) 
                VALUES ('$añoA', '$kilometraje', '$marca', '$modelo', '$version', '$color', '$combustible', '$precio', '$departamento', '$provincia', '$numt', '$rutaDestino')";

        if ($conn->query($sql) === TRUE) {
            echo "Vehículo registrado exitosamente.";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } else {
        echo "Error al subir la foto.";
    }
} else {
    echo "No se seleccionó ninguna foto o hubo un error.";
}
$conn->close();

?>