const express = require('express'); 
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if (err) {
      console.log("Can't connect to database: ", err);
    } else {
      console.log('Connected to ' + config.db);
    }
  });

  app.use(express.static(__dirname + '/client/dist/'));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(2121, ()=>{
    console.log("Server is listening on port 2121!");
});