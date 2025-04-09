async function buscarPokemon() {
    const nombre = document.getElementById("pokemonInput").value.toLowerCase();
    const infoDiv = document.getElementById("pokemonInfo");
    const nombrePokemon = document.getElementById("nombrePokemon");
    const imagenPokemon = document.getElementById("imagenPokemon");
    const tipoPokemon = document.getElementById("tipoPokemon");
    const alturaPokemon = document.getElementById("alturaPokemon");
    const pesoPokemon = document.getElementById("pesoPokemon");
  
    try {
      const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
      if (!respuesta.ok) throw new Error("Pokémon no encontrado");
  
      const datos = await respuesta.json();
  
      nombrePokemon.textContent = datos.name.toUpperCase();
      imagenPokemon.src = datos.sprites.front_default;
      tipoPokemon.textContent = datos.types.map(t => t.type.name).join(", ");
      alturaPokemon.textContent = datos.height;
      pesoPokemon.textContent = datos.weight;
  
      infoDiv.classList.remove("hidden");
    } catch (error) {
      alert(error.message);
      infoDiv.classList.add("hidden");
    }
  }
  