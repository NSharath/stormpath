var express = require('express');
var stormpath=require('express-stormpath');

var app = express();

app.use(stormpath.init(app, {

application:process.env.STORMPATH_URL,


}));


app.get('/', function(req,res){

res.send("Thanks for visiting the website. Make sure you login <a href ='/login'>login</a>!");
});

app.listen(process.env.PORT); 

