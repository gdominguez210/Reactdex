const express = require('express');
const router = express.Router();
const storage = require('node-persist');

router.get('/', async (req, res) => {
    await storage.init();
    let appStorage = await storage.getItem('jsPokedex');
    if (!appStorage) storage.setItem('jsPokedex', {});
    res.send('storage set up');
})

storage.get('/api/storage/:key', async (req, res) => {
    await storage.init();
    console.log(req);
    let appStorage = await storage.getItem('jsPokedex');
    return res.json(appStorage[req.key])
})

module.exports = router;