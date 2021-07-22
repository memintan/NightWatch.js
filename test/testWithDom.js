module.exports = {
    'First test with Dom':(browser) =>{
        browser
            .url('https://news.ycombinator.com/')
            .waitForElementVisible('.hnname')
            .assert.containsText('.hnname', 'Hacker News');
        
    }
}