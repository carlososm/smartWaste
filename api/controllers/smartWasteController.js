'use strict';


var mongoose = require('mongoose'),
  Trade = mongoose.model('Trades');

exports.list_all_trades = function(req, res) {
  Trade.find({}, function(err, trade) {
    if (err)
      res.send(err);
    res.json(trade);
  });
};




exports.create_a_trade = function(req, res) {
  var new_trade = new Trade(req.body);
  new_trade.save(function(err, trade) {
    if (err)
      res.send(err);
    res.json(trade);
  });
};


exports.read_a_trade = function(req, res) {
  Trade.findById(req.params.tradeId, function(err, trade) {
    if (err)
      res.send(err);
    res.json(trade);
  });
};


exports.update_a_trade = function(req, res) {
  Trade.findOneAndUpdate({_id: req.params.tradeId}, req.body, {new: true}, function(err, trade) {
    if (err)
      res.send(err);
    res.json(trade);
  });
};


exports.delete_a_trade = function(req, res) {


  Trade.remove({
    _id: req.params.tradeId
  }, function(err, trade) {
    if (err)
      res.send(err);
    res.json({ message: 'Trade successfully deleted' });
  });
};
