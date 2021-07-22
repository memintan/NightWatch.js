module.exports = {

    "@tags":["google"],
    'Google Advance search: Elon Musk': function(browser){

        const mainQuery = 'Elon Musk';

        const page = browser.page.googleAdvancedSearch();

        page
            .navigate()
            .setQuery(mainQuery)
            .selectFilter('@languageDropdown', 'lang_tr')
            .selectFilter('@lastUpdateDropdown', 'w')
            .search();

        browser
            .assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Musk')
            .assert.urlContains('lr=lang_tr', 'Params: Language is Turkish')
            .assert.urlContains('as_qdr=w', 'Params: Time period is last week');

        const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
        const resultsPageLanguageSelector = '[aria-label="Search Turkish pages"]';
        const resultsPageLastUpdateSelector = '[aria-label="Past week"]';

        browser.assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is set in the query input');
        browser.assert.containsText(resultsPageLanguageSelector, 'Search Turkish pages', 'UI: Language is set to Turkish');
        browser.assert.containsText(resultsPageLastUpdateSelector, 'Past week', 'UI: Last update is set to Past week');

        browser.saveScreenshot('tests_output/google.png');
    }
};