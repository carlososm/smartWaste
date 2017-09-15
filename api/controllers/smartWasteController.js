'use strict';

var mongoose = require('mongoose');
Trade = mongoose.model('Trades');

exports.list_all_trades = function(req, res) {
  Trade.find({}, function(err, trade) {
    if (err)
      res.send(err);
    res.json(trade);
  });
};

exports.add_a_trade = function(req, res) {
  var new_trade = new Trade(req.body);
  new_task.save(function(err, trade) {
    if (err)
      res.send(err);
    res.json(trade);
  });
};
