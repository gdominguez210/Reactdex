const storage = require('node-persist');
const fs = require('fs')

export const checkStorage = async (item) => {
    let appStorage = JSON.parse(localStorage.getItem('jsPokedex'));
    return appStorage[item] !== undefined;
}

export const addToStorage = async (key, value) => {
    let body = {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({ [key]: value })
    }
    await fetch(`/api/storage/`, body);
}

export const getFromStorage = async (item) => {
    let fetchedItem = await fetch(`/api/storage/${item}`);
    return await fetchedItem.json();
}
export const setUpStorage = async () => {
    await fetch(`/api/storage`);
}