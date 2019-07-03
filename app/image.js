const puppeteer = require('puppeteer');

const defaultViewport = {
  width: 700,
  height: 700
};

{}

const updateImage = async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    defaultViewport: defaultViewport
  });
  const page = await browser.newPage();
  await page.goto('https://zealous-mccarthy-bc8472.netlify.com/');
  await page.screenshot({path: 'app/quote.png'});

  const quote = await page.$(".qig__quote p"),
        author = await page.$(".qig__quote-author"),
        quoteText = await page.evaluate(element => element.textContent, quote);
        quoteAuthor = await page.evaluate(element => element.textContent, author);

  await browser.close();

  return {
    quote: quoteText,
    author: quoteAuthor
  };
};

module.exports = updateImage;
