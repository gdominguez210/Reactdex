const express = require('express');
const router = express.Router();
const storage = require('node-persist');

router.get('/', async (req, res) => {
    await storage.init();
    let appStorage = await storage.getItem('jsPokedex');
    if (!appStorage) storage.setItem('jsPokedex', {});
    res.send('storage set up');
})

router.post('/', async (req, res) => {
    await storage.init();
    let appStorage = await storage.getItem('jsPokedex');
    let item = req.body.item;
    let key = Object.keys(item)[0];
    let value = Object.values(item)[0];
    console.log(key, value);
    appStorage[key] = value;
    storage.setItem('jsPokedex', appStorage);
    res.json({ [key]: value });
})

router.get('/:key', async (req, res) => {
    await storage.init();
    let appStorage = await storage.getItem('jsPokedex');
    let item = appStorage[req.params.key]
    console.log(item);
    if (!item) {
        return res.status(404).json({ 'error': `not found` })
    } else { res.json(item) }
})

module.exports = router;