import { POKEMON_TYPES } from './constants';
export const getRandomId = () => Math.floor(Math.random() * (152 - 0)) - 0;
export const getRandomTypeId = () => {
    let id = Math.floor(Math.random() * (POKEMON_TYPES.length - 0)) - 0;
    return POKEMON_TYPES[id];
}
export const getPokemonOfType = (object) => {
    return object.pokemon;
}
export const extractPokemon = obj => {
    return Object.values(obj)[0];
}
export const capitalize = (string) => {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
}
export const handleStats = (stats) => {
    let data = {
        variables: [],
        sets: [{
            key: 'stats',
            label: 'stats',
            values: {}
        }
        ]
    };

    stats.forEach((statItem) => {
        let statName = parseStatName(statItem.stat.name);
        data['variables'].push({ key: statName, label: formatStatName(statName) })
        console.log(statItem, statName);
        data['sets'][0]['values'][statName] = statItem.base_stat;
    })
    console.log(data);
    return data;
}
export const parseMoves = (moves) => {

    return moves.map(item => {

        return {
            name: item.move.name,
            learn_method: item.version_group_details[0].move_learn_method.name,
            level_learned: item.version_group_details[0].move_learn_method.name = 'level-up' ? item.version_group_details[0].level_learned_at : '-',
            url: item.move.url
        }
    });
}
const formatStatName = (statName) => {

    let statPhrase = statName.split(' ');
    let formattedStatName = statPhrase.map(word => capitalize(word));
    return formattedStatName.join(' ');
}
const parseStatName = (stat) => stat.split('-').join(' ');