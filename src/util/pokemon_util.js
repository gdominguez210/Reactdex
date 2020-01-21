
const getRandomId = () => Math.floor(Math.random() * (152 - 0)) - 0;

export const getPokemon = async () => {
    let id = getRandomId();
    console.log(id);
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let pokemon = await response.json();

    return pokemon;
}