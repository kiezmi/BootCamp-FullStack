'use strict';

const EXPRESS = require('express');

//Contstan
const PORT= 8080

//App
const APP = EXPRESS();
APP.get('/',(req, res)=>{
  res.send("Hello World\n");
})

APP.listen(PORT,()=>{
  console.log('Running on => http://${`localhost`}:${PORT}');
})

