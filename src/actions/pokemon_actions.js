export const RECEIVE_POKEMON = "RECEIVE_POKEMON";


export const receivePokemon = payload => {
    return {
        type: RECEIVE_POKEMON,
        payload
    }
}