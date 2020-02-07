

export const checkStorage = (item) => {
    let appStorage = JSON.parse(localStorage.getItem('jsPokedex'));
    return appStorage[item] !== undefined;
}

export const addToStorage = (key, value) => {
    let appStorage = JSON.parse(localStorage.getItem('jsPokedex'));
    appStorage[key] = value;
    localStorage.setItem('jsPokedex', JSON.stringify(appStorage));
}

export const getFromStorage = (item) => {
    let appStorage = JSON.parse(localStorage.getItem('jsPokedex'));
    return appStorage[item];
}