var express = require('express');
var bodyParser = require('body-parser');

var getData = function(req){
    return{name:req.body.name , method: req.method}
};

var app = express();

    app.use(express.static('public'));

    app.use(bodyParser.urlencoded({extended:false}));

    app.use(bodyParser.json());

    //get

    app.get('/submit', function(req,res){
         res.send('<h1> GET ' + req.query.name + '</h1>'
             + '<h1> GET ' + req.query.password + '</h1>');
    });

    app.get('/service/:name', function (req, res){
        res.send('<h1>GET'+ req.params.name + '</h1>');
    });


    //post
    app.post('/service', function(req,res){
        res.send(getData(req));
    });

    //put
    app.put('/service', function(req,res){
        res.send(getData(req));
    });

    //delete
    app.delete('/service', function(req,res){
        res.send(getData(req));
    });

    app.listen(8080);

console.log('Rest up and running');



