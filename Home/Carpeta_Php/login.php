<?php
include('../../Datos/conexion.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $email = $_POST['correo'];
    $password = $_POST['contraseña'];

    $stmt = $conn->prepare("SELECT * FROM login WHERE correo = ? AND contraseña = ?");
    $stmt->bind_param("ss", $email, $password);

    $stmt->execute();

    // Obtener el resultado
    $result = $stmt->get_result();

    if (mysqli_num_rows($result) > 0) {

        header("Location: ../Carpeta_html/Home1.html ");
        exit();
    } else {

        echo "Correo o contraseña incorrectos.";
    }

    $stmt->close();
}
?>
