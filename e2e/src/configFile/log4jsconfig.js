var log4jsConfig = function() {
    var log4js = require('log4js');
    log4js.configure('./configFile/log4js.json');
    var loggerType = log4js.getLogger("default"); // this is the category of logging (file/console)
     

    this.logger = function() {
        return loggerType;
    }
};

module.exports = new log4jsConfig();