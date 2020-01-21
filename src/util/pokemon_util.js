
const getRandomId = () => Math.floor(Math.random() * (152 - 0)) - 0;

export const getPokemon = async () => {
    let id = getRandomId();
    let response = await fetch(`https://pokeapi.co/api/v2/${id}`);
    let pokemon = response.json();
    console.log(pokemon);
}