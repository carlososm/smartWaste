'use strict';
module.exports = function(app) {
  var smartWaste = require('../controllers/smartWasteController');

  // smartWaste Routes
  app.route('/trades')
      .get(smartWaste.list_all_trades)
      .post(smartWaste.create_a_trade);

  app.route('/trades/:tradeId')
      .get(smartWaste.read_a_trade)
      .put(smartWaste.update_a_trade)
      .delete(smartWaste.delete_a_trade);
};
