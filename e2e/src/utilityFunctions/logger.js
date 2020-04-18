var config = require('../configFile/log4jsconfig.js');

 var logger = function() {
     var logger = config.logger();

     this.write = function(message) {
         logger.debug(message);
     };
 };

 module.exports = new logger();