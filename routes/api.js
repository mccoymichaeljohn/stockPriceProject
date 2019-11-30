/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var MongoClient = require('mongodb');

const CONNECTION_STRING = process.env.DB; //MongoClient.connect(CONNECTION_STRING, function(err, db) {});

module.exports = function (app) {

  const client = new MongoClient(CONNECTION_STRING, {useNewUrlParser: true});
  const dbName = 'library'

  app.route('/api/stock-prices')
    .get(function (req, res){
      
    });
    
};
