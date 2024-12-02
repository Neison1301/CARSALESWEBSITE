document.addEventListener("DOMContentLoaded", function () {
    
    const form = document.getElementById("appointment-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;

        if (!name || !email || !service || !date) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        alert(
            `Cita enviada con éxito:\n\nNombre: ${name}\nCorreo Electrónico: ${email}\nServicio: ${service}\nFecha: ${date}`
        );
        
        form.reset();
    });
});