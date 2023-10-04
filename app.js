const http = require('http');
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;
const hostname='127.0.0.1';


app.use('/css', express.static('css')) 
app.use('/javascript', express.static('javascript'))
app.use('/images', express.static('images'))
app.use('/resume', express.static('resume'))
app.set('view engine', 'ejs') 
app.get('/', (req, res)=>{
    res.render('../html/index');
})
app.get('/about', (req, res)=>{
    res.render('../html/about');
})
app.get('/experience', (req, res)=>{
    res.render('../html/experiences');
})
app.get('/projects', (req, res)=>{
    res.render('../html/projects');
})
app.get('/contact', (req, res)=>{
    res.render('../html/contact');
})
app.listen(port, ()=>{
    console.log(`The application started successfully on port http://${hostname}:${port}/`);
});
