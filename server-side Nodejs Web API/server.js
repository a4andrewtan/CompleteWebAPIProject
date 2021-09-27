var mysql = require('mysql'); //need to use the mysql library
var db = mysql.createPool({  //set variable db to be the db connection
   host: 'localhost',
   port: '3306',
   user: 'root',
   password: 'cdev',
   database: 'quote'
});

db.getConnection(err => {  // test out connetion and console.log error if there is one
   if (err) throw err;
   console.log('Connected To DB');
}); 


var express = require("express"); //using the express framework
var app = express(); // set variable app to be an instance of express framework. From now on, app is the express
var cors = require('cors') // set cors to be the cors class
app.use(cors()); // let express output to allow all web client regardless of origin
app.use(express.json()); // json() is a method inbuilt in express to recognize the incoming Request Object from the web client as a JSON Object.
app.use(express.static("./public")); //static files are to be served from the public folder
app.route('/quotes').get(getAllQuotes); // if the method is GET and the url is /quotes, execute the setAllQuotes function
app.route('/quotes').post(insertQuotes); // if the method is POST and the url is /quotes, execute the insertQuotes function
app.route('/quotes').delete(resetQuotes); // if the method is GET and the url is /random, execute the getRandomQuotes function
app.route('/random').get(getRandomQuotes); // if the method is GET and the url is /random, execute the getRandomQuotes function

function getAllQuotes(request, respond) {

   var sql = "SELECT * from message";  // create the SQL statement
   var result = db.query(sql, function (err, result) {  // run the SQL query and return the result as JSON
      respond.json({results:result});
   });
}

function insertQuotes(request, respond) {

   var sql = "INSERT INTO message (id, author, quotation) VALUES (?, ?, ?)"; // create the SQL statement
   var result = db.query(sql, [null, request.body.author, request.body.quotation], function (err, result) {
      respond.json(result.result); // run the SQL query and return the result as JSON
   });
}


function getRandomQuotes(request, respond) {
   var sql = "SELECT * from message ORDER BY RAND() LIMIT 1";  // create the SQL statement
   var result = db.query(sql, function (err, result) { // run the SQL query and return the result as JSON
      respond.json({results:result});
   });
}

function resetQuotes(request, respond) {
   if (request.body.password == "cdevdbav"){
   var sql1 = "DELETE from message ";  // create the SQL statement
   var query = db.query(sql1, function (err, result) { // run the SQL query and return the result as JSON
      var sql2 = "INSERT INTO message (author, quotation) VALUES ?";
      var values = [
         ['Ellen Ullman', 'We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.'],
         ['Anonymous', 'The best thing about a boolean is even if you are wrong, you are only off by a bit.'],
         ['Grace Hopper', 'If it is a good idea, go ahead and do it. It is much easier to apologize than it is to get permission.'],
         ['C-3PO', 'The city’s central computer told you?  R2D2, you know better than to trust a strange computer!'],
         ['Bjarne Stroustrup', 'I have always wished for my computer to be as easy to use as my telephone], my wish has come true because I can no longer figure out how to use my telephone.'],
         ['Jeremy Keith', 'Understand well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand'],
         ['Grace Hopper', 'Java is to JavaScript as ham is to hamster.'],
      ];
      var result = db.query(sql2, [values], function (err, result) { // run the SQL query and return the result as JSON
         respond.json(result);
      });
   });}
   else{
      respond.json("fail");
   }
}

app.listen(8080); // start the app to be listening for request @ port 8080
console.log("web server running @ http://127.0.0.1:8080"); // output to console 

