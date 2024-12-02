function filterCars() {
    const selectedModel = document.getElementById("fmodelos").value;
    const selectedBrand = document.getElementById("fmarcas").value;
  
    
    const cars = document.querySelectorAll(".car-card");
  
    for (let i = 0; i < cars.length; i++) {
      const car = cars[i]; 
      const carModel = car.getAttribute("data-modelos");
      const carBrand = car.getAttribute("data-marcas");
    
      if (
        (selectedModel === "all" || carModel === selectedModel) &&
        (selectedBrand === "all" || carBrand === selectedBrand)
      ) {
        car.style.display = "block";
      } else {
        car.style.display = "none";
      }
    }
  }
  