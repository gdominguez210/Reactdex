const express = require('express');
const router = express.Router();
const storage = require('node-persist');

router.get('/', async (req, res) => {
    try {
        await storage.init();
        let appStorage = await storage.getItem('jsPokedex');
        if (!appStorage) await storage.setItem('jsPokedex', { pokemon: {}, moves: {} });
    } catch (err) {
        console.log(err);
    }
    return res.send('storage set up');
})

router.post('/', async (req, res) => {
    try {
        let appStorage = await storage.getItem('jsPokedex');
        let endpoint = Object.keys(req.body)[0];
        let key = Object.keys(req.body[endpoint])[0];
        let value = Object.values(req.body[endpoint])[0];
        appStorage[endpoint][key] = value;
        await storage.setItem('jsPokedex', appStorage);
        return res.json({ [key]: value });
    } catch (err) {
        console.log(err);
    }
})

router.get('/:endpoint/:key', async (req, res) => {
    try {
        let appStorage = await storage.getItem('jsPokedex');
        let item = appStorage[req.params.endpoint][req.params.key];
        if (!item) {
            return res.json({ 'error': `not found` })
        } else { return res.json(item) }
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;