'use strict';

var mongoose = require('mongoose'), Trade = mongoose.model('Trades');
var mongoose = require('mongoose'),
    Contability = mongoose.model('Contabilities');

/** CONTABILITY functions **/
exports.create_a_cont = function(req, res) {
  var new_cont = new Contability(req.body);
  new_cont.save(function(err, cont) {
    if (err)
      res.send(err);
    res.json(cont);
  });
};

exports.read_a_cont = function(req, res) {
  Contability.findById(req.params.contId, function(err, cont) {
    if (err)
      res.send(err);
    res.json(cont);
  });
};

exports.update_a_cont = function(req, res) {
  Contability.findOneAndUpdate({_id : req.params.contId}, req.body,
                               {new : true}, function(err, cont) {
                                 if (err)
                                   res.send(err);
                                 res.json(cont);
                               });
};

exports.delete_a_cont = function(req, res) {
  Contability.remove({_id : req.params.contId}, function(err, cont) {
    if (err)
      res.send(err);
    res.json({message : 'Contability successfully deleted'});
  });
};

/** TRADE functions **/
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
  Trade.findOneAndUpdate({_id : req.params.tradeId}, req.body, {new : true},
                         function(err, trade) {
                           if (err)
                             res.send(err);
                           res.json(trade);
                         });
};

exports.delete_a_trade = function(req, res) {
  Trade.remove({_id : req.params.tradeId}, function(err, trade) {
    if (err)
      res.send(err);
    res.json({message : 'Trade successfully deleted'});
  });
};

/** ACCOUNT functions **/
exports.list_all_accounts = function(req, res) {
  Trade.find({}, function(err, trade) {
    if (err)
      res.send(err);
    res.json(trade);
  });
};

exports.create_an_account = function(req, res) {
  var new_trade = new Trade(req.body);
  new_trade.save(function(err, trade) {
    if (err)
      res.send(err);
    res.json(trade);
  });
};

exports.read_an_account = function(req, res) {
  Trade.findById(req.params.tradeId, function(err, trade) {
    if (err)
      res.send(err);
    res.json(trade);
  });
};

exports.update_an_account = function(req, res) {
  Trade.findOneAndUpdate({_id : req.params.tradeId}, req.body, {new : true},
                         function(err, trade) {
                           if (err)
                             res.send(err);
                           res.json(trade);
                         });
};

exports.delete_an_account = function(req, res) {
  Trade.remove({_id : req.params.tradeId}, function(err, trade) {
    if (err)
      res.send(err);
    res.json({message : 'Account successfully deleted'});
  });
};
