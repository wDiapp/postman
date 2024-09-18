const express = require ('express');
const router = express.Router();

var carros = [];
router
    .post('/api/cars/', (req, res) => {
        const {marca, ano, modelo, placa}=req.body;
        const cars ={
            id: carros.length,
            marca: marca,
            ano: ano,
            modelo: modelo,
            placa: placa
        }
        carros.push(cars);
        return res.status(201).send({message:"Carro criado com sucesso"})
    })
    .get ('/api/cars/', (req, res) => {
        return res.status(200).send({data:carros})
    })
    .get ('/api/cars/:id', (req, res) => {
        const {id} = req.params;
        let car;
        carros.forEach(c => {
            if(id == c.id)
                car = c
        });
        if(car == null)
            return res.status(500).send({message:"Erro ao procurar carro"})
        else{
            return res.status(200).send({data:car})
        }
    })
    .put ('/api/cars/:id', (req, res) => {
        const {id} = req.params;
        const {marca, ano, modelo, placa} = req.body
        let car;
        carros.forEach (c => {
            if (id == c.id)
                car = c})

            if (car == null)
                return res.status(500).send({message: "Erro ao procurar carro"});
            else{
                const car = {
                    id: id,
                    marca: marca,
                    ano: ano,
                    modelo: modelo,
                    placa: placa
                }
                carros [id] = car
                return res.status(201).send({message: "Carro atualizado com sucesso!"})
            }
        })
        .delete ('/api/cars/:id', (req, res) => {
            const carId = parseInt (req.params.id);
            const carIndex = carros.findIndex (c => c.id == carId);
            if(carIndex !==-1){
                carros.splice(carIndex, 1);
                res.status(200).send({message:"Carro deletado!"});
            }else{
                res.status(404).send({message:"Carro não encontrado!"})
            }
        })

module.exports = router