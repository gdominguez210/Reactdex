const express = require('express');
const router = express.Router();
const storage = require('node-persist');

router.get('/', async (req, res) => {
    await storage.init();
    let appStorage = await storage.getItem('jsPokedex');
    if (!appStorage) storage.setItem('jsPokedex', { pokemon: {}, moves: {} });
    res.send('storage set up');
})

router.post('/', async (req, res) => {
    await storage.init();
    let appStorage = await storage.getItem('jsPokedex');
    let endpoint = Object.keys(req.body)[0];
    let key = Object.keys(req.body[endpoint])[0];
    let value = Object.values(req.body[endpoint])[0];
    appStorage[endpoint][key] = value;
    storage.setItem('jsPokedex', appStorage);
    res.json({ [key]: value });
})

router.get('/:endpoint/:key', async (req, res) => {
    await storage.init();
    let appStorage = await storage.getItem('jsPokedex');
    console.log(req.params.endpoint);
    let item = appStorage[req.params.endpoint][req.params.key];
    if (!item) {
        return res.json({ 'error': `not found` })
    } else { res.json(item) }
})

module.exports = router;