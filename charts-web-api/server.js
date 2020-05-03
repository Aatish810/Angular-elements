const express = require('express');

const bodyParser = require('body-parser');
const chartObj = require('./web-api/charts-api');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
//Web API Routes
app.get('/api/chartsdata', (req, res) => {
    let promise = chartObj.fetchChartsData();

    promise.then((data) => {
        console.log(data);
        res.json(data);
    }, (reason) => {
        res.send(reason);
    });
});
app.get('/api/multiseries/chartsdata', (req, res) => {
    let promise = chartObj.fetchMultiSeriesChartsData();

    promise.then((data) => {
        console.log(data);
        res.json(data);
    }, (reason) => {
        res.send(reason);
    });
});
app.listen(9090, () => console.log('Server started at Port : 9090'));