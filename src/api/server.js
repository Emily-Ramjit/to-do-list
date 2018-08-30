var sqlite3 = require('sqlite3').verbose();
var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());
var bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var db = new sqlite3.Database('tdl.db');

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS users (UserId INTEGER, Name TEXT)");
});


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

app.get('/getItems/:id', function (req, res, callback) {
  var id = JSON.stringify(req.params.id);
  db.serialize(function() {  
    db.all(`SELECT * from Tasks where UserId = ` + id + ``,function(err,rows){  
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

    app.post('/createUser', function (req, res, callback) {
        var postData = (JSON.stringify(req.body.name));
      db.serialize(function() {  
        db.all(`INSERT INTO users (name) VALUES (` + postData + `)` ,function(err,rows){  
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

    //   app.post('/createItem', function (req, res, callback) {
    //     db.serialize(function() {  
    //       db.all("INSERT INTO tdl.Tasks (desc, status) VALUES(body.desc, body.status)",function(err,rows){  
    //           if(err)
    //           {  
    //               console.log(err);  
    //           }  
    //           else{  
    //               console.log(rows);  
    //           }  
    //           res.json(rows)
    //         });  
    //       });
    //     });
        // app.post('/markDone', function (req, res, callback) {
        //   db.serialize(function() {  
        //     db.all("UPDATE tdl.Tasks (status = 'Done') inner join on tdl.users.UserId == tdl.Tasks.UserId' where tdl.item_id == body.id",function(err,rows){  
        //         if(err)
        //         {  
        //             console.log(err);  
        //         }  
        //         else{  
        //             console.log(rows);  
        //         }  
        //         res.json(rows)
        //       });  
        //     });
        //   });

          // app.post('/removeItem', function (req, res, callback) {
          //   db.serialize(function() {  
          //     db.all("Delete FROM tdl.Tasks where tdl.item_id == body.id",function(err,rows){  
          //         if(err)
          //         {  
          //             console.log(err);  
          //         }  
          //         else{  
          //             console.log(rows);  
          //         }  
          //         res.json(rows)
          //       });  
          //     });
          //   });

app.listen(3000, () => console.log('Example app listening on port 3000!'))