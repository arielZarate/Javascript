// Función para mostrar la sección correspondiente y ocultar las demás
function showSection(sectionId) {
  // Ocultar todas las secciones
  document.querySelectorAll("section").forEach((section) => {
    section.style.display = "none";
  });
  // Mostrar la sección deseada
  document.getElementById(sectionId).style.display = "block";
}

// Ejecutar la solicitud de la API tan pronto como se cargue la página
/**
 window.addEventListener("load", function () {
  fetch("http://localhost:3000/mascotas")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));

  // Mostrar la página de inicio por defecto
  showSection("home");
});
 */

window.addEventListener("load", function () {
  fetch("http://localhost:3000/mascotas")
    .then((response) => response.json())

    .then((data) => {
      //consola
      console.log(data);

      // Mostrar los datos en el div petList
      const petListDiv = document.getElementById("petList");
      // Limpiar contenido previo
      petListDiv.innerHTML = "";
      // Iterar sobre los datos de las mascotas y agregarlos al div
      data.forEach((pet) => {
        const petElement = document.createElement("div");
        petElement.innerHTML = `
         <div class="card">
          <h2>${pet.name}</h2>
          <p>Especie: ${pet.species}</p>
          <p>Raza: ${pet.breed}</p>
          <p>Género: ${pet.gender}</p>
          <p>Color: ${pet.color}</p>
          <p>Edad: ${pet.age}</p>
          <p>Altura: ${pet.height}</p>
          <p>Descripción: ${pet.description}</p>
          <img src="${pet.image.url}" alt="${pet.name}" style="max-width: 200px;" />
        </div>
          `;
        petListDiv.appendChild(petElement);
      });
    })
    .catch((error) => console.error("Error:", error));

  // Mostrar la página de inicio por defecto
  showSection("home");
});
