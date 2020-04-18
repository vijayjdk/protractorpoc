var accessionPage = function () {

     var requisitionNumber = element(by.className('requisition-number'));
     var cancerType = element(by.css('input[data-bind="value: CancerType"]'));
     var clientAccessionId = element(by.css('input[data-bind="textInput:$root.Accession().ClientAccessionId"]'));
     var fedexTracking = element(by.css('input[data-bind="value: FedexTracking"]'));
     var client = element(by.id('client'));
     var orderingLocation = element(by.id('facility'));
     var orderingprovider = element(by.id('physician'));
     var patientFN = element(by.css('input[placeholder="First Name"]'));
     var patientLN = element(by.css('input[placeholder="Last Name"]'));
     var patientDOB = element.all(by.css('input[placeholder="Date of Birth"]')).first();
     var patientAddress = element(by.css('input[placeholder="Address Line 1"]'));

     //Insurance webelements//
     var addInsurance = element(by.linkText('Add Insurance'));
     var payorName = element(by.css('input[placeholder="Payor Name"]'));

     // /////Specimen / Test/////
     var addSpecimen = element(by.css('button[data-bind*="EditSpecimen"]'));
     var externalSpecimenId = element(by.css('input[data-bind*="ExternalSpecimenId"]'));
     var addSpecimenType = element(by.id('autoSpecimenTypes'));
     var addBodySite = element(by.id('autoBodySite'));
     var addTransportType = element(by.id('autoTransportType'));
     var addcollectionTime = element(by.id('collectionTime'));
     var addReceivedDate = element(by.id('txtReceivedDate'));
     var addUnitOfMeasurement = element(by.id('autoUnitOfMeasurement'));
     var addTubes = element(by.id('btn-AddNew'));
     var tubeVolume = element(by.css('input[data-bind="value:TubeVolume"]'));
     var tubeLotNumber = element(by.css('input[data-bind="value:TubeLotNumber"'));
     var tubeType = element(by.css('input[data-bind="value:TubeType"]'));
     var saveSpecimen = element(by.xpath('//button[@class="btn btn-success"]'));
     var assignPanel = element(by.css('button[data-bind="click: $root.AssignPanel,disable : $root.Accession().IsMigrated"]'));
     var searchPanel = element(by.css('input[value="Search Panels"]'));
     var savePanelButton = element.all(by.css('button[data-bind="click: $root.SaveTestAndPanelConfiguration"]')).get(1);

     //ICD10 and CPT codes//
     var icd10Code = element(by.id('icd10CodeSelect'));
     var cptCode = element(by.id('cptCodeSelect'));

     // AssignProfessionalWork//
     // var assignProfessionalWorkButton = element(by.css('button[data-bind*="SetupAssignProfessionalWork"]'));
     // var assignProfessionalWorkCheckbox = element(by.id('chkAssignProfessionalWork'));
     // var assignProfessionalWorkCloseButton = element(by.id('CloseBtnAssignProfessionalWork'));
     // var childTest = element.all(by.className('todo-title'));
     // var SpecimenTubes = element(by.css('tbody[data-bind="foreach: SpecimenTubes"]'));
     // var patientRelationship = element(by.id('relationshipId'));
     // var lab = element(by.css('select[data-bind*="optionsText: "LabName""]'));
     // var patientGender = element(by.css('select[data-bind*="value: GenderId"]'));
     // var patientCountry = element(by.id('countryId'));
     //Special Instructions/Clinical Information/Treatment Status/Cancer//
     // var specialInstructions = element(by.css('textarea[data-bind="value:SpecialInstructions"]'));
     // var clinicalInformation = element(by.css('textarea[data-bind="value:ClinicalInformation"]'));
     // var treatmentStatus = element(by.css('input[data-bind="value: TreatmentStatus"]'));

     //State/Comments//
     // var cancerState = element(by.css('input[data-bind="value: CancerState"]'));
     // var addComment = element(by.css('input[placeholder="Add Comment .."]'));
     //Add File button//
     // var addFilesButton = element(by.css('input[name="files[]"]'));

     var saveAccession = element(by.id('btnSaveAccession'));
     var loader = require('../utilityFunctions/loader');
     var log= require('../utilityFunctions/logger');
     var EC = protractor.ExpectedConditions;

     this.getUserIcon = function () {
          return userIcon;
     };

     this.addLabClientPhysicianInformation = function (data) {
          log.write('Entering Client Physician Information');
          browser.wait(EC.elementToBeClickable(requisitionNumber), 5000);
          requisitionNumber.sendKeys(data.requisitionNumber);
          browser.wait(EC.elementToBeClickable(cancerType), 5000);
          cancerType.sendKeys(data.cancerType);
          browser.wait(EC.elementToBeClickable(clientAccessionId), 5000);
          clientAccessionId.sendKeys(data.clientAccessionId);
          browser.wait(EC.elementToBeClickable(clientAccessionId), 5000);
          fedexTracking.sendKeys(data.clientAccessionId);
          browser.wait(EC.elementToBeClickable(client), 5000);
          client.sendKeys(data.client);
          client.sendKeys(protractor.Key.TAB);
          browser.wait(EC.elementToBeClickable(orderingLocation), 5000);
          orderingLocation.sendKeys(data.orderingLocation);
          orderingLocation.sendKeys(protractor.Key.TAB);
          browser.wait(EC.elementToBeClickable(orderingprovider), 5000);
          orderingprovider.sendKeys(data.orderingprovider);
          orderingprovider.sendKeys(protractor.Key.TAB);
     };

     this.addPatientInformation = function (data) {
          log.write('Entering Patient Information');
          browser.wait(EC.elementToBeClickable(patientFN), 5000);
          patientFN.sendKeys(data.patientFName);
          patientLN.sendKeys(data.patientLName);
          browser.wait(EC.elementToBeClickable(patientDOB), 5000);
          patientDOB.sendKeys(protractor.Key.CONTROL + "a");
          patientDOB.sendKeys(data.patientDOB);
          element(by.cssContainingText('option', data.patientGender)).click();
          element(by.cssContainingText('option', data.patientCountry)).click();
          browser.wait(EC.elementToBeClickable(patientAddress), 5000);
          patientAddress.sendKeys(data.patientAddress);
     };

     this.addInsurance = function () {
          //browser.wait(EC.elementToBeClickable(addInsurance), 5000);
          log.write('Entering Insurance Information');
          addInsurance.click();
          payorName.sendKeys('Acclaim');
          element(by.cssContainingText('option', 'self')).click();
     };

     this.addSpecimen = function (data) {
          browser.wait(EC.elementToBeClickable(addSpecimen), 5000);
          addSpecimen.click().then(function (){
               log.write('Entering Specimen details');
               browser.wait(EC.elementToBeClickable(externalSpecimenId), 5000);
               externalSpecimenId.sendKeys(data.externalSpecimenId);
               browser.wait(EC.elementToBeClickable(addSpecimenType), 5000);
               addSpecimenType.sendKeys(data.addSpecimenType);
               addSpecimenType.sendKeys(protractor.Key.TAB);
               browser.wait(EC.elementToBeClickable(addBodySite), 5000);
               addBodySite.sendKeys(data.addBodySite);
               addBodySite.sendKeys(protractor.Key.TAB);
               browser.wait(EC.elementToBeClickable(addTransportType), 5000);
               addTransportType.sendKeys(data.addTransportType);
               addTransportType.sendKeys(protractor.Key.TAB);
               browser.wait(EC.elementToBeClickable(addcollectionTime), 5000);
               addcollectionTime.sendKeys(protractor.Key.CONTROL + "a");
               addcollectionTime.sendKeys(data.addcollectionTime);
               addcollectionTime.sendKeys(protractor.Key.TAB);
               browser.wait(EC.elementToBeClickable(addReceivedDate), 5000);
               addReceivedDate.sendKeys(protractor.Key.CONTROL + "a");
               addReceivedDate.sendKeys(data.addReceivedDate);
               addReceivedDate.sendKeys(protractor.Key.TAB);
               browser.wait(EC.elementToBeClickable(addUnitOfMeasurement), 5000);
               addUnitOfMeasurement.sendKeys(data.addUnitOfMeasurement);
               addUnitOfMeasurement.sendKeys(protractor.Key.TAB);
               browser.wait(EC.elementToBeClickable(addTubes), 5000);
               addTubes.click();
               tubeVolume.sendKeys(data.tubeVolume);
               tubeLotNumber.sendKeys(data.tubeLotNumber);
               tubeType.sendKeys(data.tubeType);
               saveSpecimen.click();
          });
     };

     this.addCTCFISHTest = function (data) {
          browser.actions().mouseMove(assignPanel).perform().then(function () {
               browser.wait(EC.visibilityOf(assignPanel), 5000);
               browser.wait(EC.elementToBeClickable(assignPanel), 5000);
               loader.waitForElementVisibility();
               assignPanel.click().then(function () {
                    browser.wait(EC.elementToBeClickable(searchPanel), 5000);
                    loader.waitForElementVisibility();
                    searchPanel.click().then(function () {
                         searchPanel.sendKeys(data.searchPanel).then(function () {
                              log.write('Selecting Panel: '+data.searchPanel);
                              browser.wait(EC.textToBePresentInElementValue(searchPanel, data.searchPanel), 5000);
                              loader.waitForElementVisibility();
                              searchPanel.sendKeys(protractor.Key.ENTER);
                              browser.wait(EC.elementToBeClickable(savePanelButton), 5000);
                              savePanelButton.click().then(function () {
                              });
                         });
                    });
               });
          });
     };

     this.addICDCPTCodes = function () {
          browser.actions().mouseMove(icd10Code).perform();
          browser.wait(EC.elementToBeClickable(icd10Code), 5000);
          icd10Code.sendKeys('H16');
          loader.waitForElementVisibility();
          icd10Code.sendKeys(protractor.Key.ENTER);
          browser.wait(EC.elementToBeClickable(cptCode), 5000);
          cptCode.sendKeys('cpt');
          loader.waitForElementVisibility();
          cptCode.sendKeys(protractor.Key.ENTER)
     };

     this.saveAccessionClick = function () {
          browser.sleep(5000);
          browser.actions().mouseMove(saveAccession).perform().then(function () {
               browser.wait(EC.visibilityOf(saveAccession), 5000);
               saveAccession.click().then(function(){
                    log.write('Save Specimen');
               });
          });
     };

     this.logOutButtonClick = function () {
          logOutButton.click();
     };

};
module.exports = new accessionPage();