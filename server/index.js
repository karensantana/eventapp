const express = require('express');
const app = express();

app.get('/', (req, res) => {
    app.send({hello: "Hello Athlone!"});
});

const PORT = process.env.PORT;
app.listen(PORT);