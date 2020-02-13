const express = require('express');
const app = express();
const path = require('path');
const storage = require('./backend/routes/api/storage');
const port = 5000;
const bodyParser = require('body-parser');

app.listen(port, () => (`server is running on port ${port}`))
app.use(express.static('../dist'));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
})

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(bodyParser.json());

app.use("/api/storage", storage);
