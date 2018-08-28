var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('tdl.db');

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS users (UserId INTEGER, Name TEXT)");
});



var express = require('express');
var app = express();

app.get('/', function (req, res) {
    sqlConn.send('Hello World!')
  })

app.get('/getUsers', function (req, res, callback) {
db.serialize(function() {  
  db.all("SELECT * from Users",function(err,rows){  
      if(err)
      {  
          console.log(err);  
      }  
      else{  
          console.log(rows);  
      }  
      res.json(rows)
    });  
  });
});


app.get('/getItems', function (req, res) {
  
    res.send('Hello World!')
  })

app.post('/createUser', function (req, res) {
  // 'INSERT INTO users (name)
  // VALUES('test name')'
  })

app.post('/createItem', function (req, res) {
     // 'INSERT INTO tdl.Tasks (desc, status)
  // VALUES(body.desc, body.status)'
  })

app.post('/markDone', function (req, res) {
   // 'UPDATE tdl.Tasks (status = 'Done')
  //   inner join on tdl.users.UserId == tdl.Tasks.UserId' where tdl.item_id == body.id
  })

app.post('/removeItem', function (req, res) {
     // 'Delete FROM tdl.Tasks
  //  where tdl.item_id == body.id

  })

app.listen(3000, () => console.log('Example app listening on port 3000!'))