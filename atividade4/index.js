const express = require('express');
const calculadora = require('./util/calculadora');

const app = express();
const port = 3000;

app.get('/somar/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.send(`Resultado: ${calculadora.somar(a, b)}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.send(`Resultado: ${calculadora.subtrair(a, b)}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.send(`Resultado: ${calculadora.multiplicar(a, b)}`);
});

app.get('/dividir/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.send(`Resultado: ${calculadora.dividir(a, b)}`);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
