const express = require('express');
const app = express();
const path = require('path');
const storage = require('./backend/routes/api/storage');
const port = 5000;

app.listen(port, () => console.log(`server is running on port ${port}`))
app.use(express.static('../dist'));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
})

app.use("/api/storage", storage);
