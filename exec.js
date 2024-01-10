const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://labeneko.github.io/playwright_test/');
  const title = await page.locator('h1').innerText();
  console.log(title)
  await browser.close();
})();