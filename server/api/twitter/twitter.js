import Twit from 'twit';

const Twitter = (() => {
  const TwitConfig = {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000,
  };
  const twit = new Twit(TwitConfig);

  const search = (params) => {
    return new Promise((resolve, reject) => {
      twit.get('search/tweets', params)
        .then(resolve)
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  };

  return {
    search,
  };
})();

export default Twitter;
