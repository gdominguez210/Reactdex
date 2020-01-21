
export const getRandomId = () => Math.floor(Math.random() * (152 - 0)) - 0;

export const getPokemon = async (pokeId) => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
    let pokemon = await response.json();
    return pokemon;
}