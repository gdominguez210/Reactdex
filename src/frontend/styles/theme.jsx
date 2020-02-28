import { POKEMON_TYPE_COLORS } from '../util/constants';

export const theme = {
    ...POKEMON_TYPE_COLORS
}
export const typeColor = (name) => {
    return {
        backgroundColor: POKEMON_TYPE_COLORS[name],
        display: 'inline-block',
        color: "#FFFFFF",
        padding: "5px",
        borderRadius: "4px",
        margin: "0px 2px"
    }
};