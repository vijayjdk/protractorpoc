var loginPage = function(){

    var log= require('../utilityFunctions/logger');

    var EC = protractor.ExpectedConditions;

    var userNameField = element(by.id('username'));
    var passwordField= element(by.id('password'));
    var loginButton= element(by.id('btn-Login'));
    var loginForm= element(by.id('loginFrm'));
    
    this.appUrl= function(url){
        browser.get(url).then(function(){
            log.write('Opening '+url);
        })
    };

    this.setUserName = function(userName){
        browser.wait(EC.presenceOf(userNameField),5000).then(function(){
            log.write('Enter Username '+userName);
        })
       
        userNameField.sendKeys(userName);
    };
    
    this.setPassword = function(password){
        browser.wait(EC.presenceOf(passwordField),5000).then(function(){
            log.write('Entered Password');
        })
        passwordField.sendKeys(password); 
    };
    
    this.buttonClick =  function(){  
        browser.wait((loginButton),5000);    
        loginButton.click().then(function(){
            log.write('Click on Login Button');
            browser.sleep(10000);
        });
    };

    this.loginFormPage= function() {
        return loginForm;        
    } 

    this.applicationLogin= function(data){
        browser.get(data.url);
        userNameField.sendKeys(data.userName);
        passwordField.sendKeys(data.password);
        loginButton.click().then( function(){
            log.write('Login with '+data.userName);
        });
    }

};

module.exports = new loginPage();