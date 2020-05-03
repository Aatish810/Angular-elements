const mongojs = require('mongojs');
const db = mongojs('charts-db', ['QuarterSales','MultiSeriesChartData']);

class ChartsData {
    constructor() {

    }
    fetchChartsData() {
        return new Promise((resolve, reject) => {
            db.QuarterSales.find((err, docs) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(docs);
                }
            });
        });
    }
    fetchMultiSeriesChartsData() {
        return new Promise((resolve, reject) => {
            db.MultiSeriesChartData.find((err, docs) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(docs);
                }
            });
        });
    }
}
module.exports = new ChartsData();