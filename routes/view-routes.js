const ajax = require('ajax');
var axios = require('axios');
const express = require('express');
const router = express.Router()

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("blog-simple");
  });

  app.get('/africa', function (req, res) {
    //ajax request to the backend and in the .then execute the res.render with the response object you got back
    axios
      .get(
        'https://stark-stream-40899.herokuapp.com/api/continents/africa'

      ).then((result) => { console.log('here', result); res.render('africa', result.data) }).catch((error) => {
        console.log(error);
      })
  })  


  app.get("/asia", function (req, res) {
    axios
      .get(
        'https://stark-stream-40899.herokuapp.com/api/continents/asia'

      ).then((result) => { console.log('here', result); res.render('asia', result.data) }).catch((error) => {
        console.log(error);
      })
  });

  app.get("/australia", function (req, res) {
    axios
    .get(
      'https://stark-stream-40899.herokuapp.com/api/continents/australia'

    ).then((result) => { console.log('here', result); res.render('australia', result.data) }).catch((error) => {
      console.log(error);
    })
  });
  
  app.get("/europe", function (req, res) {
    axios
    .get(
      'https://stark-stream-40899.herokuapp.com/api/continents/europe'

    ).then((result) => { console.log('here', result); res.render('europe', result.data) }).catch((error) => {
      console.log(error);
    })
  });

  app.get("/northamerica", function (req, res) {
    axios
    .get(
      'https://stark-stream-40899.herokuapp.com/api/continents/north%20america'

    ).then((result) => { console.log('here', result); res.render('northamerica', result.data) }).catch((error) => {
      console.log(error);
    })
  });

  app.get("/southamerica", function (req, res) {
    axios
    .get(
      'https://stark-stream-40899.herokuapp.com/api/continents/south%20america'

    ).then((result) => { console.log('here', result); res.render('southamerica', result.data) }).catch((error) => {
      console.log(error);
    })
  });
  
  app.get("*", function (req, res) {
    res.render("blog-simple");
  });
};
