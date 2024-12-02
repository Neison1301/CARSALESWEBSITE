document.addEventListener("DOMContentLoaded", () => {
    const botonComprar = document.getElementById("comprar");
    const popup = document.getElementById("popup");
    const verCarritoBtn = document.getElementById("verCarrito");
    const seguirComprandoBtn = document.getElementById("seguirComprando");

    // Función para mostrar el popup
    function mostrarPopup() {
        popup.style.display = "flex"; // Mostrar el popup
    }

    // Función para ocultar el popup
    function ocultarPopup() {
        popup.style.display = "none"; // Ocultar el popup
    }

    // Evento de clic en el botón COMPRAR
    botonComprar.addEventListener("click", () => {
        // Obtener información del producto desde los atributos del botón
        const id = botonComprar.getAttribute("data-id");
        const nombre = botonComprar.getAttribute("data-nombre");
        const precio = parseFloat(botonComprar.getAttribute("data-precio"));

        // Cargar carrito existente o crear uno nuevo
        const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        // Agregar el producto al carrito
        carrito.push({ id, nombre, precio });

        // Guardar carrito actualizado en LocalStorage
        localStorage.setItem("carrito", JSON.stringify(carrito));

        // Mostrar el popup de éxito
        mostrarPopup();
    });

    // Evento de clic en "Ver carrito"
    verCarritoBtn.addEventListener("click", () => {
        window.location.href = "../Carrito/Carrito.html"; // Cambia esta ruta a la de tu página de carrito
    });

    // Evento de clic en "Seguir comprando"
    seguirComprandoBtn.addEventListener("click", () => {
        window.location.href = "../Modelos/Carpeta_html/modelos.html"; // Cambia esta ruta a la de tu página de modelos
    });
});