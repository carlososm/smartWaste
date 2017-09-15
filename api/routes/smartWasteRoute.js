'use strict';
module.exports = function(app) {
  var smartWaste = require('../controllers/smartWasteController');

  // todoList Routes
  app.route('/trades')
      .get(smartWaste.list_all_trades)
      .post(smartWaste.add_a_trade);

  // app.route('/tasks/:taskId')
  //   .get(todoList.read_a_task)
  //   .put(todoList.update_a_task)
  //   .delete(todoList.delete_a_task);
};
