export const RECEIVE_MOVE = "RECEIVE_MOVE";
export const RECEIVE_MOVES = "RECEIVE_MOVES";

export const receiveMove = payload => {
    return {
        type: RECEIVE_MOVE,
        payload
    }
}

export const receiveMoves = payload => {
    return {
        type: RECEIVE_MOVES,
        payload
    }
}