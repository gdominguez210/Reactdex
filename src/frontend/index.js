import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store"
import App from './components/app';
document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    let storage = localStorage.getItem('jsPokedex');
    let store = configureStore();
    if (!storage) localStorage.setItem('jsPokedex', JSON.stringify({}))
    ReactDOM.render(<App store={store} />, app);
});