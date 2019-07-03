const makeTweet = (quote, author) => {

  const makeQuote = (quote, author) => `"${quote}"\n\n~ ${author}`;

  const cutoffQuote = (quote, extraChars) => {
    const cutoff = extraChars + 8,
          stringLimit = quote.length - cutoff,
          shortQuote  = quote.substring(0, stringLimit);
          return `${shortQuote}...`;
  }

  const firstQuote  = makeQuote(quote, author),
        tweetLength = firstQuote.length,
        extraChars  = tweetLength - 280,
        needsCutoff = extraChars > 0;

  return needsCutoff ? makeQuote(cutoffQuote(quote, extraChars), author) : firstQuote;
}

module.exports = makeTweet;
