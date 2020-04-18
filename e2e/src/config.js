var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config =  {
allScriptsTimeout: 21000,

    // capabilities: {   
    //     browserName: 'chrome'
        // 'chromeOptions': {
        //     'args': ['disable-infobars'] 
    // },

   multiCapabilities: [

       {
            browserName: 'chrome',
       },

    //    {
    //         browserName: 'chrome'
    //    }
       
   ],
   //maxSessions: 1,

    //Spec Files
    specs: 
    [
        // './specs/loginSuccess.js',
        // './specs/dashboard.js',
        './specs/loginSuccessCSV.js',
        // './specs/accession.js'
    ],

    suites:{
        loginSuccess: './specs/loginSuccess.js',
        dashboard:'./specs/dashboard.js',
        loginSuccessCSV: './specs/loginSuccessCSV.js',
        accession: './specs/accession.js'
    },

    directConnect:true,

    jasmineNodeOpts: {
        defaultTimeoutInterval: 200000
    },

    plugins: [{
        package: 'jasmine2-protractor-utils',
        disableHTMLReport: true,
        disableScreenshot: false,
        screenshotPath: 'D:/Protractor/helixprojectpoc2/e2e/src/outputFiles/reports/screenshots',
        screenshotOnExpectFailure: false,
        screenshotOnSpecFailure: true,
        clearFoldersBeforeTest: true,
        htmlReportDir: 'D:/Protractor/helixprojectpoc2/e2e/src/outputFiles/reports/htmlReport',
    }],

    onPrepare: function() {
        browser.driver.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(20000);
        browser.waitForAngularEnabled(false);

        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'D:/Protractor/helixprojectpoc2/e2e/src/outputFiles/reports/xml',
            filePrefix: 'xmlresults-'//+ new Date().getDate() + '-' + new Date().getMonth() + '-' + new Date().getFullYear() + '-' + new Date().getTime()
        }))

        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
              displayStacktrace: true,
              consolidate: true,
              displayFailuresSummary: true,
              displayFailuredSpec: true,
              displaySuiteNumber: true,
              displaySpecDuration: true
            }
          }));
    },

    onComplete: function() {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();

        capsPromise.then(function(caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            platform = caps.get('platform');

            var HTMLReport = require('protractor-html-reporter-2');

            testConfig = {
                reportTitle: 'Protractor Test Execution Report',
                outputPath: 'D:/Protractor/helixprojectpoc2/e2e/src/outputFiles/reports',
                outputFilename: 'Protractor Test Report', //+ new Date().getDate() + '-' + new Date().getMonth() + '-' + new Date().getFullYear() + '-' + new Date().getTime(),
                screenshotPath: 'D:/Protractor/helixprojectpoc2/e2e/src/outputFiles/reports/screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
                testPlatform: platform
            };
            new HTMLReport().from('D:/Protractor/helixprojectpoc2/e2e/src/outputFiles/reports/xml/xmlresults.xml', testConfig);
        });
    }
}