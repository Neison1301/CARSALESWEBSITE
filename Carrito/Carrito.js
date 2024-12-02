document.addEventListener("DOMContentLoaded", () => {
    const listaCarrito = document.getElementById("lista-carrito");
    const totalPrecio = document.getElementById("total-precio");
    const botonPagar = document.getElementById("pagar");
    const botonLimpiar = document.getElementById("limpiar-carrito");

    // Cargar carrito desde LocalStorage
    const cargarCarrito = () => {
        const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        listaCarrito.innerHTML = "";
        let total = 0;

        carrito.forEach((producto, index) => {
            const item = document.createElement("li");
            item.textContent = `${producto.nombre} - S/ ${producto.precio}`;

            // Crear el botón de eliminar para cada producto
            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar";
            botonEliminar.classList.add("eliminar-boton");
            botonEliminar.addEventListener("click", () => {
                // Eliminar el producto específico del carrito
                carrito.splice(index, 1); // Eliminar solo el producto en el índice
                localStorage.setItem("carrito", JSON.stringify(carrito)); // Guardar el carrito actualizado
                cargarCarrito(); // Recargar la lista de productos
            });

            item.appendChild(botonEliminar); // Agregar el botón al item de la lista
            listaCarrito.appendChild(item); // Agregar el item a la lista
            total += producto.precio;
        });

        totalPrecio.textContent = `Total: S/ ${total}`;
    };

    // Limpiar carrito
    botonLimpiar.addEventListener("click", () => {
        localStorage.removeItem("carrito");
        cargarCarrito();
    });

    // Pagar (simulación)
    botonPagar.addEventListener("click", () => {
        const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        if (carrito.length === 0) {
            alert("Tu carrito está vacío");
            return;
        }

        alert(`Gracias por tu compra. Total: S/ ${carrito.reduce((acc, prod) => acc + prod.precio, 0)}`);
        localStorage.removeItem("carrito");
        cargarCarrito();
    });

    cargarCarrito(); // Inicializar la carga del carrito
});