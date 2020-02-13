const storage = require('node-persist');
const fs = require('fs')

export const checkStorage = async (item) => {
    let appStorage = JSON.parse(localStorage.getItem('jsPokedex'));
    return appStorage[item] !== undefined;
}

export const addToStorage = async (endpoint, key, value) => {
    let body = {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            [endpoint]: { [key]: value }
        })
    }
    await fetch(`/api/storage/`, body);
}

export const getFromStorage = async (endpoint, item) => {
    let fetchedItem = await fetch(`/api/storage/${endpoint}/${item}`);
    let json = await fetchedItem.json();
    return json;
}
export const setUpStorage = async () => {
    await fetch(`/api/storage`);
}