// Seleccionamos los elementos necesarios
const commentInput = document.getElementById("comment-input");
const addCommentBtn = document.getElementById("add-comment-btn");
const commentsList = document.getElementById("comments-list");

// Función para añadir un nuevo comentario
function addComment() {
    const commentText = commentInput.value.trim(); // Obtiene el texto del textarea y elimina espacios extras
    
    if (commentText === "") {
        alert("Por favor, escribe un comentario antes de enviarlo.");
        return;
    }

    // Crear un div para el comentario
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.textContent = commentText;

    // Añadir el comentario al listado
    commentsList.appendChild(commentDiv);

    // Limpiar el textarea
    commentInput.value = "";
}

// Añadir evento al botón para añadir comentarios
addCommentBtn.addEventListener("click", addComment);
