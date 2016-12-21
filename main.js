/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express'); // eenvoudige webserverin node js
var parser = require('body-parser'); // extensie op express om eenvoudig body uit te lezen

var app = express();
app.use(parser.json());

console.log("Hello world!");

app.listen(4321);
