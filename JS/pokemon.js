function getRandomPokemonId() {
    return Math.floor(Math.random() * 1010) + 1;
}

async function fetchPokemonData() {
    const identificator = getRandomPokemonId();
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${identificator}`)
    if (!resp.ok) {
        console.error("RPOKE : Failed to fetch data:", +resp.statusText)
        return;
    }
    const pokemon = await resp.json();
    display(pokemon);
}

function display(pokemon) {
    const container = document.getElementById('pokemon-container');
    const name = document.createElement('h1');
    const image = document.createElement('img');

    const Capitalized = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    name.textContent = Capitalized;
    name.classList.add('pokemon-name');

    image.src = pokemon.sprites.front_default;
    image.alt = pokemon.name;
    image.classList.add('pokemon-image');

    container.innerHTML = '';

    container.appendChild(name)
    container.appendChild(image)
}

document.addEventListener('DOMContentLoaded', fetchPokemonData)