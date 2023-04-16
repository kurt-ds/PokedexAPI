const container = document.querySelector('#all_pokemon_container');

const getPokemon = async (id) => {
    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        putPokemon(response.data);
    }
    catch (err) {
        console.log("Error!", err);
    }
}


for (let i = 0; i < 256; i++) {
    getPokemon(i);
}



const putPokemon = (data) => {
    const pokemonContainer = document.createElement('div');
    pokemonContainer.classList.add('container');

    const pokemonImage = document.createElement('img');
    pokemonImage.src = data.sprites.front_default;
    pokemonContainer.appendChild(pokemonImage)

    const pokemonName = document.createElement('p');
    pokemonName.innerText = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    pokemonContainer.appendChild(pokemonName);

    const pokemonId = document.createElement('p');
    pokemonId.innerText = "ID: " + data.id;
    pokemonContainer.appendChild(pokemonId);

    const pokemonHeight = document.createElement('p');
    pokemonHeight.innerText = "Height: " + data.height;
    pokemonContainer.appendChild(pokemonHeight);

    const pokemonExp = document.createElement('p');
    pokemonExp.innerText = "Base Experience: " + data.base_experience;
    pokemonContainer.appendChild(pokemonExp);

    const pokemonTypes = document.createElement('p');
    pokemonTypes.innerText = "Types: "
    for (let typeC of data.types) {
        pokemonTypes.innerText += typeC.type.name.charAt(0).toUpperCase() + typeC.type.name.slice(1) + " ";
    }


    pokemonContainer.appendChild(pokemonTypes);


    container.appendChild(pokemonContainer)
}