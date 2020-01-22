import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";
import App from './components/app';
document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    let storage = localStorage.getItem('jsPokedex');
    if (!storage) localStorage.setItem('jsPokedex', JSON.stringify({}))
    ReactDOM.render(<App />, app);
});