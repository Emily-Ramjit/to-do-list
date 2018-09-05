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
    db.run("CREATE TABLE IF NOT EXISTS Tasks (item_id INTEGER, UserId INTEGER, item_desc TEXT, item_status TEXT)");
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

      app.post('/createItem', function (req, res, callback) {
        var userid = (JSON.stringify(req.body.UserId));
        var desc = (JSON.stringify(req.body.item_desc.desc));
        var status = (JSON.stringify(req.body.item_status));
        
        db.serialize(function() {  
          db.all(`INSERT INTO Tasks (UserId, item_desc, item_status) VALUES (` + userid + `,` + desc + `,`+ status + `)`,function(err,rows){  
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

        app.post('/markDone/:id', function (req, res, callback) {
            var id = (JSON.stringify(req.params.id));
            console.log(id + ' api id')
          db.serialize(function() {  
            db.all(`UPDATE Tasks set item_status = 'Complete' where item_id = ` + id + ``,function(err,rows){  
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

          app.post('/removeItem/:id', function (req, res, callback) {
            var id = (JSON.stringify(req.params.id));
            db.serialize(function() {  
              db.all(`Delete FROM Tasks where item_id = ` + id,function(err,rows){  
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

app.listen(3000, () => console.log('Example app listening on port 3000!'))