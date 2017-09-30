'use strict';
module.exports = function(app) {
  var smartWaste = require('../controllers/smartWasteController');

  // smartWaste app Routes
  app.route('/contabilities').post(smartWaste.create_a_cont);

  app.route('/:contId')
      .get(smartWaste.read_a_cont)
      .put(smartWaste.update_a_cont)
      .delete(smartWaste.delete_a_cont);

  // smartWaste trade Routes
  app.route('/:contId/trades')
      .get(smartWaste.list_all_trades)
      .post(smartWaste.create_a_trade);

  app.route('/:contId/trades/:tradeId')
      .get(smartWaste.read_a_trade)
      .put(smartWaste.update_a_trade)
      .delete(smartWaste.delete_a_trade);

  // smartWaste account Routes
  app.route('/:contId/accounts')
      .get(smartWaste.list_all_accounts)
      .post(smartWaste.create_an_account);

  app.route('/:contId/account/:accountId')
      .get(smartWaste.read_an_account)
      .put(smartWaste.update_an_account)
      .delete(smartWaste.delete_an_account);
};
