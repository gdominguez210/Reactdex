import { POKEMON_TYPE_COLORS } from '../util/constants';

export const item = {
    padding: "20px",
    border: "1px solid #dddddd",
    minWidth: "200px",
    borderRadius: "4px",
    display: 'flex'
}

export const image = {
    transform: 'scale(2)',
}

export const innerWrap = {
    margin: '0 auto'
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