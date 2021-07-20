/*
Page object amazon.com login page commands
 */

module.exports = {
    url: function () {
        return "https://www.amazon.com/"
    },
    elements:{
        signIn:{
            selector:"#nav-link-accountList"
        },
        form:{
            selector:".a-section"
        },
        email:{
            selector:"#ap_email"
        },
        continue: {
            selector:"#continue"
        },
        password:{
            selector:"#ap_password"
        },
        signInButton:{
            selector:"#signInSubmit"
        },
        errorMessageAlert:{
            selector:".a-box-inner.a-alert-container"
        },
        loggedInSuccess:{
            selector:"#nav-link-accountList"
        },
        logout:{
            selector:"#nav-item-signout"
        }
    },
    commands:[{
        /*
        Test Case 1 =>
        Check all fields visibility title and body
         */
        checkAmazonWebPage: function (){
            return this
                .assert.title("Amazon.com. Spend less. Smile more.")
                .assert.visible("body")
        },

        /*
        Test Case 2 =>
        Check all fields visibility => title, form, email and continue button
         */
        verifyLoginElements: function (){
            return this
                .click("@signIn")
                .assert.title("Amazon Sign-In")
                .assert.visible("@form")
                .assert.visible("@email")
                .assert.visible("@continue")
        },

        /*
        Test Case 3 =>
        Login with invalid credentials and get error message

         */
        invalidCredentials: function (){
            return this
                .click("@signIn")
                .setValue("@email", "test@test.com")
                .click("@continue")
                .setValue("@password","123456")
                .click("@signInButton")
        },
        loginErrorMessage: function (){
            return this
                .assert.elementPresent("@errorMessageAlert")
                .assert.elementPresent("@errorMessageAlert","There was a problem")
        },

        /*
        Test Case 4:
        -Login success check with valid credentials,
        -Check the main page,
        -Logout.
         */
        validCredentials: function (){
            return this
                .click("@signIn")
                .setValue("@email","xxxxxxxxx")
                .click("@continue")
                .setValue("@password","yyyyyyy")
                .click("@signInButton")

        },
        successUserLogin: function (){
            return this
                .assert.visible("@loggedInSuccess")
        },
    }],

};