import * as API from '../util/pokemon_api_util';
import { useDispatch } from 'react-redux';
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";


export const receivePokemon = payload => {
    return {
        type: RECEIVE_POKEMON,
        payload
    }
}