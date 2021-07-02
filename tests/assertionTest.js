import {Selector} from 'testcafe';

const developerName = Selector("#developer-name");
const osOption = Selector("#macos");
const submitButton = Selector("#submit-button");


fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t => {
    const developerNameElement = 
    await developerName.with({visibilityCheck:true})();     // wait mechanism for selector
    await t
        .setTestSpeed(0.1)
        .expect(developerNameElement.value).eql('', 'input is empty')
        .typeText(developerName, "TAU")
        .expect(developerName.value).eql('TAU', 'input contains "TAU"')
        .click(osOption)
        .click(submitButton);
});