import Twit from 'twit';

const Twitter = (() => {
  const twit = new Twit({
    consumer_key: 'GSGEzeFlvTL2I5IwGsZ7SYSu6',
    consumer_secret: 'PMbdx8KQSpPmpznT6IJ5ECYY40A5Xz2AUtoLFa0nZP7HunGqo1',
    access_token: '38898391-wc1k5AM17v8ffNCf3Ax7uMvT2fItnTBZ8oYs9KMtm',
    access_token_secret: 'XhnN17umVM9xzH3hea5SyOSmVCyhttirtGp14PiLVMHB6',
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
