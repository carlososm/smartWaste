'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TradeSchema = new Schema({
  concept : {type : String, required : 'Kindly enter the concept of the trade'},
  type : {type : String, enum : [ 'deposit', 'waste', 'movement' ]},
  createDate : {type : Date, default : Date.now},
  amount : {type : Number, required : 'Kindly enter the amount of the trade'},
  date : {type : Date, required : 'Kindly enter the date of the trade'},
  description :
      {type : String, required : 'Kindly enter the description of the trade'},
  deposit : {origin : {type : String}, destiny : {type : String}},
  movement : {origin : {type : String}, destiny : {type : String}},
  waste : {
    type : {type : String},
    subtype : {type : String},
    origin : {type : String}
  }
});
module.exports = mongoose.model('Trades', TradeSchema);

var ContabilitySchema = new Schema({
  _id : {
    type : String,
    required : 'Kindly enter the name of the contability',
    unique : true
  },
  users : [
    {name : {type : String}, nick : {type : String}, pass : {type : String}}
  ],
  accounts : [ {

  } ],
  payForm : [ {

  } ],
  trades : [ {trade : {type : Schema.ObjectId, ref : 'Trades'}} ],
  plots : [ {

  } ],

})
module.exports = mongoose.model('Contabilities', ContabilitySchema);
