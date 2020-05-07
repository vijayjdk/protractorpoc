var login = require('../pageObjects/loginPage');
var dashboard= require('../pageObjects/dashBoardPage');
var logging = require('../utilityFunctions/logger');
var accession = require('../pageObjects/accessionPage');
var barcodeBuilder= require('../pageObjects/barCodeLableBuildePage')
var loader = require('../utilityFunctions/loader');

var utils= require('../utilityFunctions/convertExcelToJSON');
var dataSheet= utils.convertExcelToJson('LoginSuccess');
var using = require('jasmine-data-provider');

describe('Login page Functionality', function(){
       using(dataSheet.LoginSuccess, function(data){
        it('Verify user with correct Username and Password', function(){
            // browser.waitForAngularEnabled(false);
            logging.write("Logging Started");
            login.appUrl(data.url);
            login.setUserName(data.userName);
            login.setPassword(data.password);
            login.buttonClick();
            expect(dashboard.getUserIcon().isPresent()).toBe(true);
        });

        it('Verify the available Dashbord feature icons', function(){
            expect(dashboard.getDashboardFeatures().count()).toEqual(6);
        });

        // xit('Creating new accession', function(){
        //      dashboard.clickOnNewAccession();
        //      loader.waitForLoader();
        //      accession.addLabClientPhysicianInformation(data);
        //      accession.addPatientInformation(data);
        //      accession.addSpecimen(data);
        //      accession.addCTCFISHTest(data);
        //      accession.saveAccessionClick();
        //     expect(barcodeBuilder.isSummaryReportAvailable().isDisplayed()).toBe(true);
        // })
    });
});