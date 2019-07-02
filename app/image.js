const puppeteer = require('puppeteer');

const defaultViewport = {
  width: 700,
  height: 700
};

const updateImage = async () => {
  const browser = await puppeteer.launch({ defaultViewport: defaultViewport });
  const page = await browser.newPage();
  await page.goto('https://zealous-mccarthy-bc8472.netlify.com/');
  await page.screenshot({path: 'app/quote.png'});

  const element = await page.$(".qig__quote p");
  const quoteText = await page.evaluate(element => element.textContent, element);

  await browser.close();
  return quoteText;
};

module.exports = updateImage;
