import { POKEMON_TYPES } from './constants';
export const getRandomId = () => Math.floor(Math.random() * (152 - 0)) - 0;
export const getRandomTypeId = () => {
    let id = Math.floor(Math.random() * (POKEMON_TYPES.length - 0)) - 0;
    return POKEMON_TYPES[id];
}
export const getPokemonOfType = (object) => {
    return object.pokemon;
}
export const extractPokemon = (obj) => {
    return Object.values(obj)[0];
}

export const extractMove = (obj, key) => {
    return obj[key];
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
        let statName = parseName(statItem.stat.name);
        data['variables'].push({ key: statName, label: formatName(statName) })
        data['sets'][0]['values'][statName] = statItem.base_stat;
    })
    return data;
}
export const parseMoves = (moves) => {
    let parsedMoves = moves.map(item => {
        return {
            order: moveOrder(item),
            name: item.move.name,
            learn_method: item.version_group_details[0].move_learn_method.name === 0 ? '-' : item.version_group_details[0].move_learn_method.name,
            level_learned: item.version_group_details[0].move_learn_method.name === 'level-up' ? item.version_group_details[0].level_learned_at : '-',
            url: item.move.url
        }
    });
    let sortedParsedMoves = parsedMoves.sort(sortByOrder);
    sortedParsedMoves = sortedParsedMoves.sort(sortByLevel);
    return sortedParsedMoves;
}
export const handleName = (name) => {
    let parsedName = parseName(name);
    let formatted = formatName(parsedName);
    return formatted;
}

export const handleBulkMoves = (moves, limit) => {

}

const moveOrder = (move) => {
    switch (move.version_group_details[0].move_learn_method.name) {
        case 'egg':
            return 1;
        case 'level-up':
            return 2;
        case 'tutor':
            return 3;
        case 'machine':
            return 4;
        default:
            return 0;
    }
}


const sortByOrder = (a, b) => a.order - b.order;
const sortByLevel = (a, b) => {
    if (a.level_learned > 0 && b.level_learned > 0) return a.level_learned - b.level_learned
}

const formatName = (name) => {
    let namePhrase = name.split(' ');
    let formattedName = namePhrase.map(word => capitalize(word));
    return formattedName.join(' ');
}
const parseName = (name) => name.split('-').join(' ');