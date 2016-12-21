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

var teller = 3;
var books = [new Book(1, 'harry potter'), new Book(2, 'Blinker')];

app.get('/books', function(request, response){
    response.send(books);
});

app.post('/books', function(request, response){
    var book = new Book(teller++, request.body.name); // {"name":"The Da Vinci Code"}
    books.push(book);
    response.status(201).send();
});

console.log("Hello world!");
console.log(books);

app.listen(4321);
