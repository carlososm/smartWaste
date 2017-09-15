
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// example SCHEMA
var TaskSchema = new Schema({
  name : {type : String, required : 'Kindly enter the name of the task'},
  Created_date : {type : Date, default : Date.now},
  status : {
    type : [ {type : String, enum : [ 'pending', 'ongoing', 'completed' ]} ],
    default : [ 'pending' ]
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);

// smartWaste SCHEMA
var samrtWasteAppSchema = new Schema({
  name : {type : String, required : 'Kindly enter the name of the task'},
  created_date : {type : Date, default : Date.now},
  users : [ {
    name : {type : String, requiered : 'Kindly enter the name of the user'},
    nick : {type : String, requiered : 'Kindly enter the nick of the user'},
    pass : {type : String, requiered : 'Kindly enter the pass of the user'},
  } ],
  accounts : [ {
    name : {type : String, requiered : 'Kindly enter the name of the account'},
    type : {type : String, enum : [ 'bank', 'cash', 'credit' ]},
    initial_balance : {
      type : double,
      requiered : 'Kindly enter the initial balance of the account'
    }
  } ]
});

var tradeSchema = new Schema({
  concept :
      {type : String, requiered : 'Kindly enter the concept of the trade'},
  date : {type : Date, default : Date.now},
  registration_date : {type : Date, default : Date.now},
  acrrual_date : {type : Date, default : date},
  ammount :
      {type : double, requiered : 'Kindly enter the ammount of the trade'}
})

module.exports = mongoose.model('Trades', tradeSchema;
module.exports = mongoose.model('Apps', samrtWasteAppSchema);
