
var barCodeLableBuilder= function(){
    var loader= require('../utilityFunctions/loader');


    var summaryReport= element(by.css('button[data-bind*="CTC-FISH Summary Report Doc"]'));

    this.isSummaryReportAvailable= function(){
        loader.waitForLoader();
        return summaryReport;
    }

}
module.exports= new barCodeLableBuilder();