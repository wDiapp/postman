const express = require ('express');
const router = express.Router();
const people =[];

router
    .get('/api/person/first', (req, res) => {
        console.log("Hello in console");
        return
    })
    .get('/api/person/first', (req, res) => {
        console.log(8+5);
        return
    })
    .get('/:numero?', (req, res) => {// "?" serve para o dado ser opcional
        const { numero } = req.params
        res.send (`Número recebido: ${numero}`);
    })
    .get('/:numero?', (req, res) => {// "?" serve para o dado ser opcional
        const { numero } = req.query
        res.send (`Número recebido: ${numero}`);
    })
    .post('/api/person', (req, res) => {
        const { name, lastname, salary } = req.body;
        const person = {
            id: people.length,
            name: name,
            lastname: lastname,
            salary: salary
        }

        people.push (person);
        return res.status(201).send({message:"Pessoa inserida com sucesso"});
    })
    .get('/api/person', (req, res) => {
        return res.status(200).send({data:people});
    });


    module.exports = router