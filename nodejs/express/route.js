var express = require('express'),
    app = express();

//app.get('/', function(req, res){ //a / é a raiz
//    res.send('<h1>Hello From NodeJS</h1>');
//});

app.use(express.static('public'));

app.get('/service', function(req,res){ // neste caso retornou um json no /servicos http://localhost:8080/service
    res.json({data: 'Some Data'});
});

//recebendo parametros
app.get('/service/:name/:last_name', function(req, res){ //a / é a raiz
    res.send('<h1>Hello ' + req.params.name + ' ' +
        req.params.last_name + '</h1>');

});

app.listen(8080);

console.log('Server running on localhost:8080');
