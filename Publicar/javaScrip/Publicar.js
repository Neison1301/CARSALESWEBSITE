/*obtenemos datos del formulario  */
  document.getElementById("form1").addEventListener("submit", function(event) {
    var año = document.getElementById("txtnAño").value;
    var kilometraje = document.getElementById("txtKilometraje").value;
    var marca = document.getElementById("txtMarca").value;
    var modelo = document.getElementById("txtmodelo").value;
    var version = document.getElementById("txtversion").value;
    var color = document.getElementById("txtcolor").value;
    var combustible = document.getElementById("cbocombustible").value;
    var precio = document.getElementById("txtPrecio").value;
    var departamento = document.getElementById("txtdepartamento").value;
    var provincia = document.getElementById("txtProvincia").value;
    var telefono = document.getElementById("txttelefono").value;
    var fotos = document.getElementById("fileFotos").files;
  
  /* validacion de de la informacion */
    if (año === ""||  kilometraje === ""||  marca === ""||  modelo === "" ||
        version === "" || color === "" || combustible === ""||  precio === "" ||
        departamento === "" || provincia === ""|| telefono === "" || fotos.length === 0) {
      alert("Por favor, complete todos los campos y seleccione al menos una foto.");
      event.preventDefault(); 
    }
  });