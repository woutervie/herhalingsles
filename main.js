/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express'); // eenvoudige webserverin node js
var parser = require('body-parser'); // extensie op express om eenvoudig body uit te lezen

var app = express();
app.use(parser.json());

app.get('/', function(request, response){
    response.send("Hello world");
});

var Book = function(id, name){
    this.id = id;
    this.name = name;
};

app.get('/books', function(request, response){
    var books = [new Book(1, 'harry potter'), new Book(2, 'Blinker')];
    response.send(books);
});

console.log("Hello world!");

app.listen(4321);
