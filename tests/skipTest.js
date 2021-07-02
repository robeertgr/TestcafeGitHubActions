fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test.page("https://devexpress.github.io/testcafe/example/")
("First Test", async t => {
    await t
        .typeText("#developer-name", "TAU")
        .click("#macos")
        .click("#submit-button");
});

test.only.page("https://devexpress.github.io/testcafe/example/")
("Only Test", async t => {
    await t
        .typeText("#developer-name", "TAU")
        .click("#macos")
        .click("#submit-button");
});

test.skip.page("https://devexpress.github.io/testcafe/example/")
("Skip Test", async t => {
    await t
        .typeText("#developer-name", "TAU")
        .click("#macos")
        .click("#submit-button");
});