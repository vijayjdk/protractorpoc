var login = require('../pageObjects/loginPage');
var dashboard = require('../pageObjects/dashBoardPage');


var papa = require('papaparse');
var fs = require('fs');
var file = fs.readFileSync('./inputFiles/testData.csv', 'utf8');
var results = papa.parse(file, {
            header: true
        });

describe('Login page Functionality with CSV file', function () {
   
    it('CSV File Operations', function() {
        // browser.waitForAngularEnabled(false);
        for(let i=0; i<results.data.length; i++){

            login.appUrl(results.data[i]['Url']);
            login.setUserName(results.data[i]['UserName']);
            login.setPassword(results.data[i]['Password']);
            login.buttonClick();
            // expect(Dashboard.getUserIcon().isPresent()).toBe(true);
        }
    });
});
