// @ts-check
const { test, expect } = require("@playwright/test");


test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  console.log("failing the test");
});

test("get started link", async ({ page, browserName }) => {
  test.skip(browserName == "webkit", "Skipping this test for only WebKit");
  await page.goto("https://playwright.dev/");
  console.log("navigated to website");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();
  console.log("clicked get started link");

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});


