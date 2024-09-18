const express = require('express');
const router = require ('./routes');
const app = express ();

router(app);

const port = 8080;
const server = app.listen (port, () => console.log (`Aplicação rodando a porta ${port}`));

module.exports = server;