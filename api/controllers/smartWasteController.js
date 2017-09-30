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
    res.send(cont);
  });
};

exports.search_a_cont = function(req, res) {
  var ID = req.params.contId;
  Contability.findOne({_id : ID}, function(err, cont) {
    if (err) {
      res.senStatus(401);
    } else if (!cont) {
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  });
};

exports.read_a_cont = function(req, res) {
  var ID = req.params.contId;
  Contability.findOne({_id : ID}, function(err, cont) {
    if (err) {
      res.json({status : 401, message : err});
    } else if (!cont) {
      res.json({status : 400, msg : "not found"});
    } else {
      res.json({status : 200, message : cont});
    }
  });
};

exports.update_a_cont = function(req, res) {
  Contability.findOneAndUpdate({_id : req.params.contId}, req.body,
                               {new : true}, function(err, cont) {
                                 if (err)
                                   res.send(err);
                                 res.send(cont);
                               });
};

exports.delete_a_cont = function(req, res) {
  Contability.remove({_id : req.params.contId}, function(err, cont) {
    if (err)
      res.send(err);
    res.send({message : 'Contability successfully deleted'});
  });
};

/** TRADE functions **/
exports.list_all_trades = function(req, res) {
  Trade.find({}, function(err, trade) {
    if (err)
      res.send(err);
    res.send(trade);
  });
};

exports.create_a_trade = function(req, res) {
  var new_trade = new Trade(req.body);
  new_trade.save(function(err, trade) {
    if (err)
      res.send(err);
    res.send(trade);
  });
};

exports.read_a_trade = function(req, res) {
  Trade.findById(req.params.tradeId, function(err, trade) {
    if (err)
      res.send(err);
    res.send(trade);
  });
};

exports.update_a_trade = function(req, res) {
  Trade.findOneAndUpdate({_id : req.params.tradeId}, req.body, {new : true},
                         function(err, trade) {
                           if (err)
                             res.send(err);
                           res.send(trade);
                         });
};

exports.delete_a_trade = function(req, res) {
  Trade.remove({_id : req.params.tradeId}, function(err, trade) {
    if (err)
      res.send(err);
    res.send({message : 'Trade successfully deleted'});
  });
};

/** ACCOUNT functions **/
exports.list_all_accounts = function(req, res) {
  Trade.find({}, function(err, trade) {
    if (err)
      res.send(err);
    res.send(trade);
  });
};

exports.create_an_account = function(req, res) {
  var new_trade = new Trade(req.body);
  new_trade.save(function(err, trade) {
    if (err)
      res.send(err);
    res.send(trade);
  });
};

exports.read_an_account = function(req, res) {
  Trade.findById(req.params.tradeId, function(err, trade) {
    if (err)
      res.send(err);
    res.send(trade);
  });
};

exports.update_an_account = function(req, res) {
  Trade.findOneAndUpdate({_id : req.params.tradeId}, req.body, {new : true},
                         function(err, trade) {
                           if (err)
                             res.send(err);
                           res.send(trade);
                         });
};

exports.delete_an_account = function(req, res) {
  Trade.remove({_id : req.params.tradeId}, function(err, trade) {
    if (err)
      res.send(err);
    res.send({message : 'Account successfully deleted'});
  });
};
