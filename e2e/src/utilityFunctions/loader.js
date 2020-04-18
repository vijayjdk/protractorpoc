
var loader= function(){
    var EC = protractor.ExpectedConditions;
    var loader = element(by.id('loaderDiv'));

    this.waitForLoader = function () {
        browser.wait(EC.invisibilityOf(loader), 10000);
   };

   this.waitForElementVisibility= function(){
       browser.sleep(4000);
   }
};
module.exports= new loader();
