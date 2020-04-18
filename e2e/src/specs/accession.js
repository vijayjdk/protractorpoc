var login = require('../pageObjects/loginPage');
var dashboard = require('../pageObjects/dashBoardPage');
var accession = require('../pageObjects/accessionPage');
var barcodeBuilder = require('../pageObjects/barCodeLableBuildePage')
var loader = require('../utilityFunctions/loader');

var utils = require('../utilityFunctions/convertExcelToJSON');
var dataSheet = utils.convertExcelToJson('Accession');
var using = require('jasmine-data-provider');

describe('Place New Order', function () {
    using(dataSheet.Accession, function (data) {

        beforeAll(function () {
            login.applicationLogin(data);
        });

        afterAll(function () {
            dashboard.logOutButtonClick();
        });
        it('Creating new accession', function () {
            dashboard.clickOnNewAccession();
            loader.waitForLoader();
            accession.addLabClientPhysicianInformation(data);
            accession.addPatientInformation(data);
            accession.addSpecimen(data);
            accession.addCTCFISHTest(data);
            accession.saveAccessionClick();
            expect(barcodeBuilder.isSummaryReportAvailable().isDisplayed()).toBe(true);
        })
    });
});