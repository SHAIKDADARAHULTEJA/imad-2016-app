var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
'article-one' : {
title : 'Article One | Shaik Rahul',
heading: 'Article One',
date   : new Date(),
content: 
`<p>
    This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
</p>
 <p>
    This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
</p>
 <p>
    This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
</p>`
},
'article-two'  : {
title : 'Article Two | Shaik Rahul',
heading: 'Article Two',
date   : new Date(),
content: 
`
<p>This is the content for my second article.
</p>
`},
'article-three':{
title : 'Article Three | Shaik Rahul',
heading: 'Article Three',
date   : new Date(),
content: 
`
<p>This is the content for my Third article.
</p>
`
}

};
function createTemplate(data){
var title = data.title;
var date  = data.date;
var heading = data.heading;
var content = data.content;
var htmltemplate  = `<html>
<head>
    <title>
       ${title}
    </title>
    <meta name="viewport"  content="width-device-width,initial-scale=1" />
    <link href="/ui/style.css" rel="stylesheet" />
   </head>
<body>
    <div class="container">
    <div>
        <a href="/"> <font color="black">Home</font></a>
    </div>
    <hr/>
    <h3>
        ${heading}
    </h3>
    <div>
${date}
</div>
<div>
${content} 
</div> 
</div>
</body>
</html>
`;
return htmltemplate;
}
var counter = 0;
app.get('/counter',function(req,res){
counter = counter + 1;
res.send(counter.toString());
});
var names= [];
app.get('/submit-name',function(req,res)
{
    //URL:localhost:/submit-name?name = xxxx
   var name = req.query.name;
   names.push(name);
   //JSON : javascript object notation
   res.send(JSON.stringify(names));
});
app.get('/', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
var articleName = req.params.articleName;
res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
console.log(`IMAD course app listening on port ${port}!`);
});
