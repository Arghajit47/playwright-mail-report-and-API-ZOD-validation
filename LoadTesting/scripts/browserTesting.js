import { browser } from "k6/experimental/browser";

export const options = {
  scenarios: {
    browser_test: {
      executor: "constant-vus",
      vus: 2,
      duration: "1s",
      options: {
        browser: {
          type: "chromium",
        },
      },
    },
  },
};

export default async function () {
  const page = browser.newPage();
  await page.setViewportSize(
    {
      width: 1920,
      height: 1080,
    },
    { width: 1240, height: 720 }
  );
  await page.goto("https://www.demoblaze.com/index.html");
  await page.close();
}

// If wanted to run headed mode, follow the cmd line: `K6_BROWSER_HEADLESS=false k6 run browserTesting.js`
