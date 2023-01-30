const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://roadmap.sh/nodejs');
    await page.screenshot({ path: 'roadmap.png'});

    await browser.close();
})();