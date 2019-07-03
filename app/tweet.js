const Twit         = require('twit'),
      fs           = require('fs'),
      path         = require('path'),
      updateImage  = require('./image.js'),
      tweetContent = require('./tweet-content.js'),
      config       = require('./../config');

const T = new Twit(config);

const tweetItOut = () => {
  updateImage().then((data) => {
    const { quote, author } = data,
          image_path = path.join(__dirname, '/quote.png'),
          b64content = fs.readFileSync(image_path, { encoding: 'base64' });

    T.post('media/upload', { media_data: b64content }, function (err, data, response) {
      if (err) { console.log(err); }

      else {
        T.post('statuses/update', {
            status: tweetContent(quote, author),
            media_ids: new Array(data.media_id_string)
          },

          function(err, data, response) {
            if (err) { console.log(err); }
          }
        );
      }
    });
  })
};



module.exports = tweetItOut;
