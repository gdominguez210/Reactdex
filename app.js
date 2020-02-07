const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('/dist/'));
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "src/frontend", "index.html"));
})

const port = 5000;
app.listen(port, () => console.log(`server is running on port ${port}`))