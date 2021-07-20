/*
amazon.com login page test.
 */

module.exports = {

    "Test Case 1: Go to amazon.com check elements, take a screenshot": (browser) => {
        const page = browser.page.loginCommand();
        page.navigate()
            .checkAmazonWebPage()
            .saveScreenshot("test/screenshots/" + "amazon.png")
            .end();
    },

    "Test Case 2: Go to login page, check elements, take a screenshot": (browser) => {
        const page = browser.page.loginCommand();
        page.navigate()
            .verifyLoginElements()
            .saveScreenshot("test/screenshots/" + "amazonLogin.png")
            .end();
    },

    "Test Case 3: Failed Login due to invalid credentials, take a screenshot": (browser) => {
        const page = browser.page.loginCommand();
        page.navigate()
            .invalidCredentials()
            .loginErrorMessage()
            .saveScreenshot("test/screenshots/" + "amazonLoginFail.png")
            .end();
    },

    "Test Case 4: Successful Login with valid credentials, take a screenshot": (browser) => {
        const page = browser.page.loginCommand();
        page.navigate()
            .validCredentials()
            .successUserLogin()
            .saveScreenshot("test/screenshots/" + "amazonLoginSuccess.png")
            .end();
    },
}