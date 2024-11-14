<?php
include('../../Datos/conexion.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $correo = $_POST['correo'];
    $contraseña = $_POST['contraseña'];

    $stmt = $conn->prepare("SELECT nombre FROM usuarios WHERE correo = ? AND contraseña = ?");
    $stmt->bind_param("ss", $correo, $contraseña);
    $stmt->execute();

    // Obtener el resultado
    $result = $stmt->get_result();

    if (mysqli_num_rows($result) > 0) {
        // Obtener el nombre del usuario
        $user = $result->fetch_assoc();
        $nombre = $user['nombre'];

        // Usar JavaScript para almacenar el nombre en localStorage
        echo "<script> localStorage.setItem('nombre', '$nombre'); window.location.href = '../Carpeta_html/Home1.html'; // Redirigir a la página de inicio
              </script>";
        exit();
    } else {
        echo "<script>
                alert('Contraseña incorrecta. Intenta de nuevo.');
                window.location.href = '../Carpeta_html/Inicio.html'; // Redirigir a la página de inicio de sesión
              </script>";
        exit();
    }

    $stmt->close();
}
?>
