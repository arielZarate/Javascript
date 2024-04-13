

//falta inplementacion aun 


fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(response => response.json())
  .then(data => {
    
  });




fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(response => response.json())
  .then(data => {
    const pokemonData = data.results;
    const pokemonCardsContainer = document.getElementById('pokemon-cards');
    
    pokemonData.forEach(pokemon => {
      // crear una tarjeta HTML para cada Pokemon aquí
    });
  });
