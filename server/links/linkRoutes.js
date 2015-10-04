var linksController = require('./linkController.js');

module.exports = function (app) {
  // app === linkRouter injected from middleware.js

  app.route('/')
    .get(linksController.allLinks)
    .post(linksController.newLink);

};
