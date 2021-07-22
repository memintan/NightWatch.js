module.exports = {
    "@tags":["googleFirst"],
    "1.Go to Google" : function(client){
        client
            .url("https://www.google.com/")
            .assert.visible("body")
            .saveScreenshot("test/screenshots/" + "google.jpg")
            .end()
    },
    "@tags":["dotdash"],
    "2. Search dotdash.com and visit the website then take a screenshot":function (browser){
        browser
            .url("https://www.google.com/")
            .pause(2000)
            .setValue("input[type=text]", ['dotdash.com', browser.Keys.ENTER])
            .pause(2000)
            .assert.containsText("#search","Dotdash")
            .click('a[href="https://www.dotdash.com/"]')
            .saveScreenshot("test/screenshots/" + "dotdash.jpg")
            .end()
    }
};