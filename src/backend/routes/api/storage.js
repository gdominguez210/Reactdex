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
    let item = JSON.parse(req.body);
    console.log(item);
})

router.get('/:key', async (req, res) => {
    await storage.init();
    let appStorage = await storage.getItem('jsPokedex');
    let item = appStorage[req.params.key] ? appStorage[req.params.key] : {}
    return res.json(item);
})

module.exports = router;