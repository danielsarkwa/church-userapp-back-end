const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/sermons', (req, res) => {
    var sermons = [
        {
            sermonId: "rtr6rt6454",
            tag: "folder",
            title: "Grace over Grace",
            numberOfsermons: 5,
            dsc: "get to the point God wants to send you and become full of grace",
            speaker: "Ps. Emmanuel Lamptey",
            date: "12/05/2020"
        },
        {
            sermonId: "rtr6rt6454",
            tag: "folder",
            title: "Grace over Grace",
            numberOfsermons: 5,
            dsc: "get to the point God wants to send you and become full of grace",
            speaker: "Ps. Emmanuel Lamptey",
            date: "12/05/2020"
        },
        {
            sermonId: "rtr6rt6454",
            tag: "folder",
            title: "Grace over Grace",
            numberOfsermons: 5,
            dsc: "get to the point God wants to send you and become full of grace",
            speaker: "Ps. Emmanuel Lamptey",
            date: "12/05/2020"
        }
    ];

    res.send(sermons);
});

const port = process.env.PORT || 1000;
app.listen(port, () => console.log(`mobile server app running on port ${port}`));