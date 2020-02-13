export const RECEIVE_MOVE = "RECEIVE_MOVE";


export const receiveMove = payload => {
    return {
        type: RECEIVE_MOVE,
        payload
    }
}