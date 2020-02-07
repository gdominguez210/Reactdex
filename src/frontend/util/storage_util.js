const storage = require('node-persist');
const fs = require('fs')

export const checkStorage = async (item) => {
    let appStorage = JSON.parse(localStorage.getItem('jsPokedex'));
    return appStorage[item] !== undefined;
}

export const addToStorage = async (key, value) => {
    let appStorage = JSON.parse(await storage.getItem('jsPokedex'));
    appStorage[key] = value;
    await storage.setItem('jsPokedex', JSON.stringify(appStorage));
    console.log(storage);
}

// export const getFromStorage = async (item) => {
//     let appStorage = JSON.parse(await storage.getItem('jsPokedex'));
//     return appStorage[item];
// }

export const getFromStorage = async (item) => {
    let fetchedItem = await fetch(`/api/storage/${item}`);
    console.log(fetchedItem);
    return fetchedItem;
}
export const setUpStorage = async () => {
    await fetch(`/api/storage`);
}