module.exports = {
    'Google Advance search: Elon Musk'(browser){
        "@tags";["google"];

        const mainQuery = "Elon Musk";
        const mainQueryInputSelector = "input[name='as_q']";
        const languageDropDownOpenerSelector = "#lr_button";
        const languageDropDownValueSelector = "li[id=':18']";
        const lastUpdateDropDownSelector = "#as_qdr_button";
        const lastUpdateDropDownValueSelector = "li[id=':81']";
        const searchButtonSelector = "input[value='Advanced Search']";
        const resultPageQuerySelector = "input[value='Elon Musk'][name='q'][aria-label='Search']";
        const resultPageLanguageSelector = "div[class='hdtb-mn-hd Yg3U7e EISXeb'] div[class='KTBKoe']";
        const resultPageUpdateSelector = "div[class='hdtb-mn-hd EISXeb'] div[class='KTBKoe']";


        browser
            .url('https://www.google.com/advanced_search')
            .setValue(mainQueryInputSelector, mainQuery)
            .click(languageDropDownOpenerSelector)
            .click(languageDropDownValueSelector)
            .click(lastUpdateDropDownSelector)
            .click(lastUpdateDropDownValueSelector)
            .click(searchButtonSelector)

            .assert.urlContains("as_q=Elon+Musk","Query is Elon Musk")
            .assert.urlContains("lr=lang_tr", "Language is Turkish")
            .assert.urlContains("as_qdr=w", "Time period is last week")

            .assert.visible(resultPageQuerySelector, "UI:Elon Musk")
            .assert.containsText(resultPageLanguageSelector, "Search Turkish pages", "Language is set to Turkish")
            .assert.containsText(resultPageUpdateSelector, "Past week", "Last update is set to Past week")

            .saveScreenshot("test/screenshots/" + "advancedGoogle.png")
    }
}