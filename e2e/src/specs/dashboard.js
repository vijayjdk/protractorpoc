
var login = require('../pageObjects/loginPage');
var dashboard = require('../pageObjects/dashBoardPage');
var utils = require('../utilityFunctions/convertExcelToJSON');
var dataSheet = utils.convertExcelToJson('LoginSuccess');
var using = require('jasmine-data-provider');

using(dataSheet.LoginSuccess, function (data) {
    describe('Dashboard features', function () {
        
        beforeAll(function () {
            // browser.waitForAngularEnabled(false);
            login.applicationLogin(data);
        });

        afterAll(function () {
            dashboard.logOutButtonClick();
        });

        it('Verify the available features on dashboard', function () {
            expect(dashboard.getDashboardFeatures().count()).toEqual(6);
        });
    });
});