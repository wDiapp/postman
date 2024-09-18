const bodyParser = require ('body-parser');
const person = require ('./person');
const cars = require ('./cars');

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        person,
        cars
    )
}