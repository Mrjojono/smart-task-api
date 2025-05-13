 const express = require('express');

 const path = require('path')
 const handlebars = require('handlebars');
const exphdle = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const bodyparser = require('body-parser');




 const app = express();
 app.use(express.json());
 app.use(express.urlencoded({extended:true})); 

 app.use('/api',require('./routes/tasks')); 

 
 app.listen(3000,()=>{
        console.log('Server is running on port 3000');
 })