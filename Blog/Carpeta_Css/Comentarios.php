<?php

include("../../Datos/conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = htmlspecialchars(trim($_POST['username']));
    $comment = htmlspecialchars(trim($_POST['comment']));

    if (!empty($username) && !empty($comment)) {

        $stmt = $conn->prepare("INSERT INTO comentarios (nombre, comentario) VALUES (?, ?)");
        $stmt->bind_param("ss", $username, $comment);

        if ($stmt->execute()) {
            echo "Comentario agregado exitosamente.";
        } else {
            http_response_code(500);
            echo "Error al agregar el comentario: " . $stmt->error;
        }

        $stmt->close();
    } else {
        http_response_code(400); 
        echo "Todos los campos son obligatorios.";
    }
} else {

    $result = $conn->query("SELECT id, nombre, comentario, fecha FROM comentarios ORDER BY fecha ASC");

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "<div class='comentario' data-id='" . $row['id'] . "'>";
            echo "<strong>" . htmlspecialchars($row['nombre']) . ":</strong> ";
            echo "<p>" . htmlspecialchars($row['comentario']) . "</p>";
            echo "<small>Fecha: " . $row['fecha'] . "</small>";
            echo "</div>";
        }
    } else {
        echo "<p>No hay comentarios aún. ¡Sé el primero en comentar!</p>";
    }
}


?>
