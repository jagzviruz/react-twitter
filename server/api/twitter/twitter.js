import Twit from 'twit';

const Twitter = (() => {
  const twit = new Twit({
    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret: '',
    timeout_ms: 60 * 1000,
  });

  const search = (params) => {
    return new Promise((resolve, reject) => {
      twit.get('search/tweets', params)
        .then(resolve)
        .catch(reject);
    });
  };

  return {
    search,
  };
})();

export default Twitter;
