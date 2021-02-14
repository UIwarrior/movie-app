const express = require('express');
const app = express();
var bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
const fs = require('fs');
const path = '/Volumes/My Passport/English';
var cors = require('cors');

app.get('/', (req, res) => {
    res.send('Hii from express');
})    

let movieNameArr = [];
const getAllMovieNames =  () => {

    fs.readdir(path, function(err, items) { 
        for (var i=0; i<items.length; i++) {
           movieNameArr.push(items[i]);
        }
      console.log('reading completed'); 
      console.log(movieNameArr); 
      return movieNameArr;
    });

}

app.get('/movie', cors(), async (req, res) => {
   console.log('API starting to run'); 
   //const movies = await getAllMovieNames();
        fs.readdir(path, function(err, items) { 
            for (var i=0; i<items.length; i++) {
            movieNameArr.push(items[i]);
        }
        console.log('reading completed'); 
        console.log(movieNameArr); 
        res.json({
            movies:movieNameArr
        })
        });
})

app.use(cors());

/* app.use(function(req, res, next) {
    // Website you wish to allow to connect
    
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9876');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

     // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); */

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
   /*  res.setHeader('Access-Control-Allow-Credentials', true);
 
    // Pass to next layer of middleware
    next();
}); */

app.listen(PORT , () => {
    console.log('server running on 8000');
})







 