const playwright = require('playwright');

(async () => {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.nicovideo.jp/');
    await page.getByRole('link', { name: 'ログイン' }).click();
    await page.locator('#input__mailtel').click();
    await page.locator('#input__mailtel').fill('xxxxxxx@xxxxxxx');
    await page.locator('#input__password').click();
    await page.locator('#input__password').fill('xxxxxxxxx');
    await page.getByRole('button', { name: 'ログイン' }).click();
    await page.goto('https://www.nicovideo.jp/my');
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    const follow = await page.getByRole('link', { name: 'フォロー中' }).innerText();
    console.log(follow)
    const follower = await page.getByRole('link', { name: 'フォロワー' }).innerText();
    console.log(follower)
    await browser.close();
})();