'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TradeSchema = new Schema({
  name : {type : String, required : 'Kindly enter the name of the trade'},
  type : {type : String, enum : [ 'deposit', 'waste', 'movement' ]},
  createDate : {type : Date, default : Date.now},
  amount : {type : Number, required : 'Kindly enter the amount of the trade'},
  concept : {type : String, required : 'Kindly enter the concept of the trade'},
  date : {type : Date, required : 'Kindly enter the date of the trade'},
  deposit : {
    origin : {
      type : String,
      required : 'Kindly enter the extern origin of the deposit'
    },
    destiny : {type : String}
  },
  movement : {origin : {type : String}, destiny : {type : String}},
  waste : {
    type : {type : String, enum : [ 'deposit', 'waste', 'movement' ]},
    subtype : {type : String, enum : [ 'deposit', 'waste', 'movement' ]},
    origin : {type : String}
  }
});

module.exports = mongoose.model('Trades', TradeSchema);
