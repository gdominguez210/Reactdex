
// const cache = require('persistent-cache');
let appStorage = cache.get('jsPokedex');
if (!appStorage) cache.put('jsPokedex', {});

export const checkCache = (item) => {
    let appCache = cache.get('jsPokedex');
    return appCache[item] !== undefined;
}

export const addToCache = (key, value) => {
    let appCache = cache.get('jsPokedex');
    appCache[key] = value;
    console.log(appCache);
    cache.put('jsPokedex', appCache);
}

export const getFromCache = (item) => {
    let appCache = cache.get('jsPokedex');
    console.log(appCache);
    return appCache[item];
}