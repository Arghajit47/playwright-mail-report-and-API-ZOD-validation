// @ts-check
const { test, expect } = require("@playwright/test");
const { z } = require("zod");

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

// Define the schema for a single user
const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
});

// Define the schema for the array of users
const schema = z.array(userSchema);

test("Validate API schema", async ({ request }) => {
  // Fix the URL typo
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  expect(response.ok()).toBeTruthy(); // Check if the response is successful

  const responseBody = await response.json(); // Parse response body

  // Validate the response against the schema
  const result = schema.safeParse(responseBody);

  // Expect the schema validation to succeed
  expect(result.success).toBeTruthy();

  // If validation fails, log the error
  if (!result.success) {
    console.error(result.error);
  }
});
