let objRepo = require('../resources/objectRepository.json');
let objLocator = require('../utils/objectLocator.js');
let inputBoxActions=require('../reusable_actions/inputBoxActions');
let buttonActions=require('../reusable_actions/buttonActions');
let waitActions=require('../reusable_actions/waitActions');

let loginpage = function(){
    'use strict';
  
    var enterUserName = objLocator.findLocator(objRepo.login.userName);
    var enterPassword = objLocator.findLocator(objRepo.login.passWord);
    var clickLoginButton = objLocator.findLocator(objRepo.login.loginButton);
    var logo = objLocator.findLocator(objRepo.login.livbimLogo);

    this.maxWindow = function(){
        browser.driver.manage().window().maximize();
    }

    this.enterUserName = function (value) {
        console.log("username 1 ");
        inputBoxActions.type(enterUserName, value);
        console.log("username 2 ");
        return this;
    };

    this.enterPassword = function (value) {
        inputBoxActions.type(enterPassword, value);
        return this;
    };

    this.clickLoginButton = function() {
        buttonActions.click();
    }

    this.isPageLoaded = function () {
        waitActions.waitForElementIsDisplayed(logo);
        return this;


}};
module.exports = new loginpage();