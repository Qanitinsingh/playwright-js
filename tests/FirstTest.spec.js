const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

test.describe.serial('Basic operations - separate tests', () => {
    test('navigate and get title', async ({ page }) => {
      await page.goto("https://alphabetaops.com/");
      // String pageTitle = driver.getTitle();
      // driver.manager().timeouts().implicitlyWait(Duration.ofSeconds(30));
      // Assert.assertEquals(pageTitle, "Automation Vault - A Learning Platform for Test Automation");

      const title = await page.title();
      console.log("Page title:", title);
      // Avoid asserting the full exact title which can change; check for a stable substring
      expect(title).toContain("Automation Vault");


      page.locator(".mb-2:first-child").click();

      console.log("Clicked on the Novoices section");
      page.locator(".mb-2:first-child ul.list-group li:nth-of-type(9)").click();
      console.log("Clicked on the Practice form in the list");
      page
        .locator(".mb-2:first-child ul.list-group li:nth-of-type(9) li a")
        .click();
      console.log("Clicked on the basic form link");

      // this form is inside frame, so we need to switch to frame first
      const frame = page.frameLocator("iframe");
      

      await frame.locator("#username").fill("Nitin Singh");
      console.log("Entered username in frame");
      // fill data in form

      // Password
      await frame.locator("#password").fill("Test@123");
      console.log("Entered password");

      // Comments
      await frame.locator("#comments").fill("Learning Playwright automation");
      console.log("Entered comments");

      // Gender Radio Button
      await frame.locator('input[value="male"]').check();
      console.log("Selected gender");

      // Skills Checkboxes
      await frame.locator('input[value="java"]').check();
      await frame.locator('input[value="selenium"]').check();
      console.log("Selected skills");

      // Experience Dropdown
      await frame.locator("#experience").selectOption("3");
      console.log("Selected experience");

      // Multi Select Dropdown
      await frame.locator("#tools").selectOption(["Selenium", "Playwright"]);
      console.log("Selected automation tools");

      // File Upload
      await frame.locator("#resume").setInputFiles("tests/testdata/resume.pdf");
      console.log("Uploaded resume");

      // Submit Form
      await frame.locator("#submitBtn").click();
      console.log("Clicked submit button");
    });
});

 