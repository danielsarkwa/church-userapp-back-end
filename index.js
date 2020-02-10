const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('welcome to the home page...');
});

const port = process.env.PORT || 1000;
app.listen(port, () => console.log(`mobile server app running on port ${port}`));