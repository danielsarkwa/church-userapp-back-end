const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('welcome to the home page...');
});

const port = process.env.PORT || 1000;
app.listen(port, () => console.log(`mobile server app running on port ${port}`));