const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('Views', __dirname + '/Views');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res){
    let nome = 'Pedro';
    res.render('index', {nome});
});

app.get('/contato.html',function(req,res){
    let nome = 'Pedro';
    res.render('contato', {nome});
});

app.post('/dados', (req, res) => {
    const name = req.body.name;
    const telefone = req.body.telefone;
    const data = req.body.data;
    const endereco = req.body.endereco;
    
    res.render('dados', { name, endereco, telefone, data });
});


const PORT = 8080;

app.listen(PORT, function(){
    console.log('app rondando na porta '+ PORT);
});