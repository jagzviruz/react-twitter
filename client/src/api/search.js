import axios from 'axios';

const Search = q =>
  new Promise((resolve, reject) => {
    axios.get('/api/search', {
      params: {
        q,
      },
    }).then(resolve)
      .catch(reject);
  });


export default Search;
