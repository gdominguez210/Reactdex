export const RECEIVE_INDEX = 'RECEIVE_INDEX';


export const receiveIndex = payload => {
    return {
        type: RECEIVE_INDEX,
        payload
    }
}