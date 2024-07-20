/*window.onload = function () {
  // Obtener los elementos del DOM
};

*/

document.addEventListener("DOMContentLoaded", function () {
  async function obtenerTodoslosPaises() {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/all`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      //console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function displayCategorias() {
    const countries = await obtenerTodoslosPaises();

    const nombresPaises = countries.map((country) => country.name.common);

    const divCategorias = document.getElementById("categories");

    nombresPaises.sort().forEach((name) => {
      const option = document.createElement("option");

      option.value = name;
      option.text = name;

      divCategorias.appendChild(option);

      obtenerPaisPorNombre("Argentina");
    });
  }

  displayCategorias();

  document
    .getElementById("categories")
    .addEventListener("change", function (event) {
      const nombre = event.target.value;

      if (nombre !== "Elije un pais") {
        obtenerPaisPorNombre(nombre);
      }
    });

  ////////////////////////////////
  async function obtenerPaisPorNombre(nombre) {
    // console.log("nombre de pais", nombre);
    try {
      const response = await fetch(
        ` https://restcountries.com/v3.1/name/${nombre}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const [country] = await response.json();
      console.log(country);

      // console.log(country);
      const currency = Object.values(country.currencies)[0];
      const leng = Object.values(country.languages)[0];
      const countryDiv = document.createElement("div");
      countryDiv.className = "country-card "; //agrego un clase al div

      countryDiv.innerHTML = `
    <h2 class="text-lg font-bold text-slate-700">${country.name.common}</h2>
    <img src=${country.flags.png} alt=${
        country.flags.alt
      }  width="200px" height="auto"/>
      <p><strong>Continente:</strong> ${country.continents}</p>
     <p><strong>Capital:</strong> ${country.capital[0]}</p>
    <p><strong>Población:</strong> ${country.population.toLocaleString()}</p>
    <p><strong>Área:</strong> ${country.area.toLocaleString()} km²</p>
    <p><strong>Región:</strong> ${country.region}</p>  
    <p><strong>Subregión:</strong> ${country.subregion}</p>
      <p><strong>Moneda:</strong> ${currency.name} (${currency.symbol})</p>   
       <p><strong>Idioma(s):</strong> ${leng} <span>${country.flag} </span> </p>


      `;

      let countryContainer = document.getElementById("country-container");

      countryContainer.innerHTML = "";
      countryContainer.appendChild(countryDiv);
    } catch (error) {
      console.log(error);
    }
  }
});
