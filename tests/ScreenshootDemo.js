fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/")
    .beforeEach(async t => {
        await t
            //.maximizeWindow()
            .setTestSpeed(0.1)
            .setPageLoadTimeout(0);
    });

test
.page("https://devexpress.github.io/testcafe/example/")
("First Test", async t => {
    await t
        .typeText("#developer-name", "TAU")
        .click("#macos")
        .click("#submit-button");
});

test
.page("https://devexpress.github.io/testcafe/example/")
("Second Test", async u => {
    await u
        .typeText("#developer-name", "TAU")
        .click("#macos")
        //.takeScreenshot()
        .click("#submit-button");
});

test
.page("https://devexpress.github.io/testcafe/example/")
("Third Test", async v => {
    await v
        .typeText("#developer-name", "TAU")
        .click("#macos")
        //.takeElementScreenshot("#submit-button")        // take a screenshot in a specify element on the page
        .click("#submit-button");
        //.takeScreenshot();                              // take a screenshot on the whole page
});