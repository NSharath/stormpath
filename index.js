var express = require('express');
var stormpath=require('express-stormpath');

var app = express();

app.use(stormpath.init(app, {

application:process.env.STORMPATH_URL,


}));


app.get('/', function(req,res){

res.send("Thanks for visiting the website. Make sure you login <a href ='/login'>login</a>!");
});

app.get('/dashboard', stormpath.loginRequired, function(req,res)
       {
    console.log(req.user);
    res.json(req.user);
    
});

app.listen(process.env.PORT || 3000); 

