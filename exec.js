const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://labeneko.github.io/playwright_test/');
  await page.waitForSelector('h1');
  const title = await page.locator('h1').innerText();
  console.log(title)

  const elements = await page.locator('ul li');

  for (let i = 0; i < await elements?.count(); i++) {
    const element = await elements.nth(i);
    const link = await element.locator('a').getAttribute('href');
    const text = await element.locator('a').innerText();
    console.log(link);
    console.log(text);
  }
  await browser.close();
})();