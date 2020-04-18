
var log= require('../utilityFunctions/logger');
var dashBoardPage = function(){

    var userIcon = element(by.className('icon-user'));
    var logOutButton= element(by.id('logOut'));
    var dashboardFeatures= element.all(by.className('dashboard_feature'));
    var placeNewOrder= element(by.linkText('Place a New Order'));


    this.getUserIcon= function(){
        return userIcon;
    }

    this.getDashboardFeatures=function(){
        return dashboardFeatures;
    }

    this.clickOnNewAccession=  function(){
         placeNewOrder.click().then(function(){
            log.write("Redirecting to new Accession page");
        });

    }

    this.logOutButtonClick= function(){
        logOutButton.click().then(function (){
            log.write('Application Logged out');   
        });
    }


}
module.exports= new dashBoardPage();